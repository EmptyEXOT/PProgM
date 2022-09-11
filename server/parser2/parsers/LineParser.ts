import ControllerConfig from "../ControllerConfig";
import ControllerVersion from "./ControllerVersion";
import ControllerTypes from "./ControllerTypes";

enum GroupNames {
    CONTROLLER_VERSION = '[Версия пульта C2000]',
    CONTROLLER_TYPES = '[Типы_приборов]',
}



export default class LineParser {
    public config: ControllerConfig;

    public parseLine(line: string, groupName: GroupNames, config: ControllerConfig) {
            switch (groupName) {
                case GroupNames.CONTROLLER_VERSION: {
                    ControllerVersion.parse(line, config);
                    break;
                }
                case GroupNames.CONTROLLER_TYPES: {
                    ControllerTypes.parse(line, config);
                    break
                }
            }
    }
}