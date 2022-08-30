enum GroupNames {
    CONTROLLER_VERSION = '[Версия пульта C2000]',
    CONTROLLER_TYPES = '[Типы_приборов]',
}

export default class GroupSwitch {
    private static readonly groupRegExp = /\[.*\]/;

    public static groupSwitch(line) {
        if (this.groupRegExp.test(line)) {
            let group: GroupNames = line;
            return group;
        }
    }

}