const Controller = require('./Controller.js');

class KDL extends Controller {
    constructor(addr, controllerType, version) {
        super(addr, controllerType, version);
        this.reader = undefined;
    }

    showInfo() {
        console.log(this);
    }
}

module.exports = KDL;