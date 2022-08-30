import GroupSwitch from "./GroupSwitch";
enum GroupNames {
    CONTROLLER_VERSION = '[Версия пульта C2000]',
    CONTROLLER_TYPES = '[Типы_приборов]',
}

export default class Flags {
    public groupName: GroupNames;
    public setFlag(line: string) {
        if (GroupSwitch.groupSwitch(line)) {
            this.groupName = GroupSwitch.groupSwitch(line);
        }
    }
}