const Controllers = require('../Controllers.js');

class KDL extends Controllers {
    constructor(line) {
        super(line);

    }

    static getCurrentController() {
        return configData.controllers.get(flags.controller.addr);
    }

    static makeLineConfig(line) {
        let lineData = {
            number: undefined,
            group: undefined,
            type: undefined,
            description: undefined,
        }

        let lineArr = line.split(',');

        for (let prop of lineArr) {
            if (prop.includes('Шлейф:')) lineData.number = +prop.split(': ')[1]
            else if (prop.includes('Раздел:')) lineData.group = +prop.split(': ')[1]
            else if (prop.includes('Тип_шлейфа:')) lineData.type = +prop.split(': ')[1]
            else if (prop.includes('Описание:')) lineData.description = prop.split(': ')[1]
        }

        return lineData
    }

    static makeOutputsConfig(line) {
        let outputData = {
            number: undefined,
            group: undefined,
            description: undefined,
        }

        let outputArray = line.split(',');

        for (let prop of outputArray) {
            if (prop.includes('Выход:')) outputData.number = +prop.split(': ')[1];
            else if (prop.includes('Раздел:')) outputData.group = +prop.split(': ')[1];
            else if (prop.includes('Описание:')) outputData.description = prop.split(': ')[1];
        }
        return outputData
    }

    static makeDriversConfig(line) {
        let driverData = {
            number: undefined,
            group: undefined,
            description: undefined,
        }

        let driverArray = line.split(',');

        for (let prop of driverArray) {
            if (prop.includes('Исполнительное_устройство:')) driverData.number = +prop.split(': ')[1];
            else if (prop.includes('Раздел:')) driverData.group = +prop.split(': ')[1];
            else if (prop.includes('Описание:')) driverData.description = prop.split(': ')[1];
        }

        return driverData;
    }

    static makeRelayConfig(line) {
        let relayData = {
            number: undefined,
            scenario: undefined,
            program: undefined,
            delay: undefined,
            time: undefined,
            description: undefined,
        }

        let relayArray = line.split(',');

        for (let prop of relayArray) {
            if (prop.includes('Реле:')) relayData.number = +prop.split(': ')[1];
            else if (prop.includes('Сценарий_упр:')) relayData.scenario = +prop.split(': ')[1];
            else if (prop.includes('Программа:')) relayData.program = +prop.split(': ')[1]
            else if (prop.includes('Задержка включения')) relayData.delay = +prop.split(': ')[1]
            else if (prop.includes('Время управления:')) relayData.time = +prop.split(': ')[1]
            else if (prop.includes('Описание:')) relayData.description = prop.split(': ')[1]
        }

        return relayData;
    }


    static parse(line) {
        if (line.includes('Состояние прибора с адресом:')) {
            this.getCurrentController().controllerWithAddrState = +line.split(': ')[1];
            this.getCurrentController().lines = [];
            this.getCurrentController().outputs = [];
            this.getCurrentController().drivers = [];
            this.getCurrentController().relays = [];
        }
        if (line.includes('Считыватель: ')) {
            this.getCurrentController().reader = +line.split(': ')[1];
        }
        if (line.includes('Шлейф: ' && 'Тип_шлейфа: ')) {
            this.getCurrentController().lines.push(this.makeLineConfig(line));
        }
        if (line.includes('Выход:')) {
            this.getCurrentController().outputs.push(this.makeOutputsConfig(line));
        }
        if (line.includes('Исполнительное_устройство:')) {
            this.getCurrentController().drivers.push(this.makeDriversConfig(line));
        }
        if (line.includes('Реле:')) {
            this.getCurrentController().relays.push(this.makeRelayConfig(line));
        }
    }
}

module.exports = KDL;