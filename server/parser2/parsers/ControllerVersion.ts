import ControllerConfig from "../ControllerConfig";

export default class ControllerVersion {
    public static parse(line: string, config: ControllerConfig) {
        if (line.includes('Версия: ')) config.controllerVersion = +line.split(': ')[1];
    }
}
