class Controllers {
    constructor(line) {
        this.addr = +line.split(',')[0].split(': ')[1];
        this.controllerType = +line.split(',')[1].split(': ')[1];
        this.controllerVersion = +line.split(',')[2].split(': ')[1];
    }

    static chooseController(line) {
        flags.controller.addr = +line.split(',')[0].split(': ')[1];
        flags.controller.name = +line.split(',')[1].split(': ')[1];
        return +line.split(',')[1].split(': ')[1];
    }
}

module.exports = Controllers;