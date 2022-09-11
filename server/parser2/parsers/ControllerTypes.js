"use strict";
exports.__esModule = true;
var ControllerTypes = /** @class */ (function () {
    function ControllerTypes() {
    }
    ControllerTypes.parse = function (line, config) {
        if (line.includes('Тип_прибора: ')) {
            var controllerProps = {
                type: undefined,
                linesCount: undefined,
                relayCount: undefined,
                baseType: undefined,
                name: undefined
            };
            var propsArr = line.split(',');
            controllerProps.type = +propsArr[0].split(': ')[1];
            controllerProps.linesCount = +propsArr[1].split(': ')[1];
            controllerProps.relayCount = +propsArr[2].split(': ')[1];
            controllerProps.baseType = propsArr[3].split(':')[1];
            controllerProps.name = propsArr[4].split(': ')[1].replace('\"', '').replace('\"', '');
            console.log(controllerProps);
            config.controllerTypes.push(controllerProps);
        }
    };
    return ControllerTypes;
}());
exports["default"] = ControllerTypes;
