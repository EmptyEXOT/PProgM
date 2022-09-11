"use strict";
exports.__esModule = true;
var ControllerVersion_1 = require("./ControllerVersion");
var ControllerTypes_1 = require("./ControllerTypes");
var GroupNames;
(function (GroupNames) {
    GroupNames["CONTROLLER_VERSION"] = "[\u0412\u0435\u0440\u0441\u0438\u044F \u043F\u0443\u043B\u044C\u0442\u0430 C2000]";
    GroupNames["CONTROLLER_TYPES"] = "[\u0422\u0438\u043F\u044B_\u043F\u0440\u0438\u0431\u043E\u0440\u043E\u0432]";
})(GroupNames || (GroupNames = {}));
var LineParser = /** @class */ (function () {
    function LineParser() {
    }
    LineParser.prototype.parseLine = function (line, groupName, config) {
        switch (groupName) {
            case GroupNames.CONTROLLER_VERSION: {
                ControllerVersion_1["default"].parse(line, config);
                break;
            }
            case GroupNames.CONTROLLER_TYPES: {
                ControllerTypes_1["default"].parse(line, config);
                break;
            }
        }
    };
    return LineParser;
}());
exports["default"] = LineParser;
