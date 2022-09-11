"use strict";
exports.__esModule = true;
var ControllerVersion = /** @class */ (function () {
    function ControllerVersion() {
    }
    ControllerVersion.parse = function (line, config) {
        if (line.includes('Версия: '))
            config.controllerVersion = +line.split(': ')[1];
    };
    return ControllerVersion;
}());
exports["default"] = ControllerVersion;
