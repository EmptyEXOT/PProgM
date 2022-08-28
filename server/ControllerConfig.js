"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*class ControllerConfig should implement singletone pattern for
* protecting program from creating multiply instances of
* configurations. Only one instance may be exist after app.post render
* operation
 */
var ControllerConfig = /** @class */ (function () {
    function ControllerConfig() {
    }
    ControllerConfig.createConfig = function () {
        if (!this.config) {
            this.config = new ControllerConfig();
        }
        return this.config;
    };
    ControllerConfig.prototype.parseVersion = function (line) {
        if (line.includes('Версия: '))
            this.controllerVersion = +line.split(': ')[1];
    };
    return ControllerConfig;
}());
exports.default = ControllerConfig;
