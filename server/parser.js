const ControllerVersion = require('./parsers/ControllerVersion.js')
const ControllersList = require('./parsers/ControllersList.js')
const Controllers = require('./parsers/Controllers.js');

const KDL = require('./parsers/controllers/KDL.js');

let lineReader = require('line-reader');
Promise = require('bluebird');

let eachLine = Promise.promisify(lineReader.eachLine);
const groupRegExp = /\[.*\]/;
const configName = 'test.txt'

global.flags = {
    group: undefined,
    controller: {
        name: undefined,
        addr: undefined,
    },
}

global.configData = {
    controllerVersion: undefined,
    controllersList: new Map(),
    remoteControl: undefined,
    controllers: new Map(),
};

async function parseConfig() {
    let controllerIndex = undefined;
    eachLine(configName, async (line) => {
    if (groupRegExp.test(line)) {
        flags.group = line
    }
    switch (flags.group) {
        case '[Версия пульта C2000]': {
            if (line.includes('Версия')) {
                configData.controllerVersion = await ControllerVersion.parse(line);
            }
            break;
        }
        case '[Типы_приборов]': {
            if (line.includes('Тип_прибора: ')) {
                await ControllersList.parse(line);
            }
            break;
        }
        case '[Пульт]': {
            //TODO parser for remoteControl
            break;
        }
        case '[Приборы]': {
            if (line.includes(',   Тип_прибора: ' && 'Версия: ')) {
                switch (Controllers.chooseController(line)) {
                    case 9: {
                        configData.controllers.set(flags.controller.addr, new KDL(line));
                        break
                    }
                }
            } else switch (flags.controller.name) {
                case 9: KDL.parse(line);
            }


        }
    }
    /*
        //TODO validate [group]
        if (line.includes(',   Тип_прибора: ' && ',  Версия: ')) {
            //TODO separator with 2 or 3 spaces via regExp
            let firstLine = line.split(','); // ['Адрес: 1', '   Тип_прибора: 9', '  Версия: 2.26']

            let addr = +firstLine[0].split(': ')[1];
            let controllerType = +firstLine[1].split(': ')[1];
            let version = +firstLine[2].split(': ')[1];

            switch (controllerType) {
                case 9: controllers.push(new KDL(addr, controllerType, version));
            }

            controllerIndex = addr-1;
        }
        if (line.includes('Считыватель: ')) {
            controllers[controllerIndex].reader = +line.split(': ')[1];
        }
     */
    }).then(()=>{
        //controllers[0].showInfo();
        console.log(configData);
        console.log(flags)
        console.log(configData.controllers.get(1))
    })
}

parseConfig();

module.exports = configData;

