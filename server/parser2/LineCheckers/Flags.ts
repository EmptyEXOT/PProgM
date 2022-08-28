import GroupSwitch from "./GroupSwitch";

export default class Flags {
    public groupName: string | undefined;
    public setFlag(line: string) {
        if (GroupSwitch.groupSwitch(line)) {
            this.groupName = line;
        }
    }
}