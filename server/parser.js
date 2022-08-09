const KDL = require('./KDL.js');
const ControllerVersion = require('./parsers/ControllerVersion.js')
const ControllerList = require('./parsers/ControllersList.js')

let lineReader = require('line-reader');
Promise = require('bluebird');

let eachLine = Promise.promisify(lineReader.eachLine);
const groupRegExp = /\[.*\]/;
const configName = 'test.txt'
let controllers = [];

let flags = {
    group: undefined,
    controller: undefined,
}

let configData = {
    controllerVersion: undefined,
    controllersList: [],
    remoteControl: undefined,
};

async function parseConfig() {
    let controllerIndex = undefined;
    eachLine(configName, async (line) => {
    if (groupRegExp.test(line)) {
        flags.group = line
    }
    switch (flags.group) {
        case '[Версия пульта C2000]': {
            if (line.includes('Версия'))
            configData.controllerVersion = ControllerVersion.parse(line);
        }
        case '[Типы_приборов]': {
            if (line.includes('Тип_прибора: ')) {
                configData.controllersList.push(ControllerList.parse(line));
            }
        }
        case '[Пульт]': {

        }
    }
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
    }).then(()=>{
        //controllers[0].showInfo();
        console.log(configData);
    })
}

parseConfig();

//comment