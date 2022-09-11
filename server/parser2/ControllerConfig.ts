import ControllerTypes from "./parsers/ControllerTypes";
import {ControllerType} from "./Types";

/*class ControllerConfig should implement singletone pattern for
* protecting program from creating multiply instances of
* configurations. Only one instance may be exist after app.post render
* operation
 */

export default class ControllerConfig {
    //singletone pattern implementation
    static config: ControllerConfig;
/*
    public get config(): ControllerConfig {
        return this.config;
    }
*/
    public static createConfig() {
        if (!this.config) {
            this.config = new ControllerConfig();
        }
        //TODO delete log in prod
        console.log('config has been created')
        this.config.controllerTypes = [];
        return this.config;
    }

    public controllerVersion: number;
    public controllerTypes: ControllerTypes[] = [];


}