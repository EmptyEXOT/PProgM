"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GroupSwitch_1 = require("./GroupSwitch");
var Flags = /** @class */ (function () {
    function Flags() {
    }
    Flags.prototype.setFlag = function (line) {
        if (GroupSwitch_1.default.groupSwitch(line)) {
            this.groupName = line;
        }
    };
    return Flags;
}());
exports.default = Flags;
