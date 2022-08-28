export default class GroupSwitch {
    private static readonly groupRegExp = /\[.*\]/;

    public static groupSwitch(line) {
        if (this.groupRegExp.test(line)) {
            return line;
        }
    }

}