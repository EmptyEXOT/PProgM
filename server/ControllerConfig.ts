interface IControllerConfig {
    parseVersion(string): number | void;
}

/*class ControllerConfig should implement singletone pattern for
* protecting program from creating multiply instances of
* configurations. Only one instance may be exist after app.post render
* operation
 */

export default class ControllerConfig implements IControllerConfig {
    //singletone pattern implementation
    private static config: ControllerConfig;

    public static createConfig() {
        if (!this.config) {
            this.config = new ControllerConfig();
        }
        return this.config;
    }

    private controllerVersion: number

    public parseVersion(line: string) {
        if (line.includes('Версия: ')) this.controllerVersion = +line.split(': ')[1];
    }

}