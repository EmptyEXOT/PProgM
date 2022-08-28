"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GroupSwitch = /** @class */ (function () {
    function GroupSwitch() {
    }
    GroupSwitch.groupSwitch = function (line) {
        if (this.groupRegExp.test(line)) {
            return line;
        }
    };
    GroupSwitch.groupRegExp = /\[.*\]/;
    return GroupSwitch;
}());
exports.default = GroupSwitch;
