"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GroupSwitch_1 = require("./GroupSwitch");
var GroupNames;
(function (GroupNames) {
    GroupNames["CONTROLLER_VERSION"] = "[\u0412\u0435\u0440\u0441\u0438\u044F \u043F\u0443\u043B\u044C\u0442\u0430 C2000]";
    GroupNames["CONTROLLER_TYPES"] = "[\u0422\u0438\u043F\u044B_\u043F\u0440\u0438\u0431\u043E\u0440\u043E\u0432]";
})(GroupNames || (GroupNames = {}));
var Flags = /** @class */ (function () {
    function Flags() {
    }
    Flags.prototype.setFlag = function (line) {
        if (GroupSwitch_1.default.groupSwitch(line)) {
            this.groupName = GroupSwitch_1.default.groupSwitch(line);
            console.log('1');
        }
    };
    return Flags;
}());
exports.default = Flags;
