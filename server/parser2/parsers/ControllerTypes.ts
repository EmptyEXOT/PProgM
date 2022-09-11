import ControllerConfig from "../ControllerConfig";
import {ControllerType} from "../Types";

export default class ControllerTypes {
    public static parse(line: string, config: ControllerConfig) {
        if (line.includes('Тип_прибора: ')) {
            const controllerProps:ControllerType = {
                type: undefined,
                linesCount: undefined,
                relayCount: undefined,
                baseType: undefined,
                name: undefined,
            }
            const propsArr = line.split(',');

            controllerProps.type = +propsArr[0].split(': ')[1];
            controllerProps.linesCount = +propsArr[1].split(': ')[1];
            controllerProps.relayCount = +propsArr[2].split(': ')[1];
            controllerProps.baseType = propsArr[3].split(':')[1];
            controllerProps.name = propsArr[4].split(': ')[1].replace('\"', '').replace('\"', '');
            console.log(controllerProps);
            config.controllerTypes.push(controllerProps);
        }


    }
}