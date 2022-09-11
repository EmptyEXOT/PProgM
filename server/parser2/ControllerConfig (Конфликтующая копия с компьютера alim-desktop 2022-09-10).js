"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*class ControllerConfig should implement singletone pattern for
* protecting program from creating multiply instances of
* configurations. Only one instance may be exist after app.post render
* operation
 */
var ControllerConfig = /** @class */ (function () {
    function ControllerConfig() {
        this.controllerTypes = [];
    }
    Object.defineProperty(ControllerConfig.prototype, "config", {
        get: function () {
            return this.config;
        },
        enumerable: false,
        configurable: true
    });
    ControllerConfig.createConfig = function () {
        if (!this.config) {
            this.config = new ControllerConfig();
        }
        //TODO delete log in prod
        console.log('config has been created');
        this.config.controllerTypes = [];
        return this.config;
    };
    return ControllerConfig;
}());
exports.default = ControllerConfig;
