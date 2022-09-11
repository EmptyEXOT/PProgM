"use strict";
exports.__esModule = true;
/*class ControllerConfig should implement singletone pattern for
* protecting program from creating multiply instances of
* configurations. Only one instance may be exist after app.post render
* operation
 */
var ControllerConfig = /** @class */ (function () {
    function ControllerConfig() {
        this.controllerTypes = [];
    }
    /*
        public get config(): ControllerConfig {
            return this.config;
        }
    */
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
exports["default"] = ControllerConfig;
