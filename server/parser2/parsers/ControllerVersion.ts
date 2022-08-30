import ControllerConfig from "../ControllerConfig";

interface ILineParser {
}

export default class ControllerVersion implements ILineParser{
    public static parse(line: string, config: ControllerConfig) {
        if (line.includes('Версия: ')) config.controllerVersion = +line.split(': ')[1];
    }
}
