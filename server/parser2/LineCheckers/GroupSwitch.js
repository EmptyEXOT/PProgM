"use strict";
exports.__esModule = true;
var GroupNames;
(function (GroupNames) {
    GroupNames["CONTROLLER_VERSION"] = "[\u0412\u0435\u0440\u0441\u0438\u044F \u043F\u0443\u043B\u044C\u0442\u0430 C2000]";
    GroupNames["CONTROLLER_TYPES"] = "[\u0422\u0438\u043F\u044B_\u043F\u0440\u0438\u0431\u043E\u0440\u043E\u0432]";
})(GroupNames || (GroupNames = {}));
var GroupSwitch = /** @class */ (function () {
    function GroupSwitch() {
    }
    GroupSwitch.groupSwitch = function (line) {
        if (this.groupRegExp.test(line)) {
            var group = line;
            return group;
        }
    };
    GroupSwitch.groupRegExp = /\[.*\]/;
    return GroupSwitch;
}());
exports["default"] = GroupSwitch;
