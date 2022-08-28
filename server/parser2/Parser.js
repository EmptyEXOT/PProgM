"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Flags_1 = require("./LineCheckers/Flags");
var lineReader = require('line-reader');
var Promise = require('bluebird');
var ControllerConfig_1 = require("../ControllerConfig");
var eachLine = Promise.promisify(lineReader.eachLine);
var GroupNames;
(function (GroupNames) {
    GroupNames["CONTROLLER_VERSION"] = "[\u0412\u0435\u0440\u0441\u0438\u044F \u043F\u0443\u043B\u044C\u0442\u0430 C2000]";
    GroupNames["CONTROLLER_TYPES"] = "[\u0422\u0438\u043F\u044B_\u043F\u0440\u0438\u0431\u043E\u0440\u043E\u0432]";
})(GroupNames = exports.GroupNames || (exports.GroupNames = {}));
var Parser = /** @class */ (function () {
    function Parser() {
        this.config = ControllerConfig_1.default.createConfig();
        this.flags = new Flags_1.default();
    }
    Parser.makeParser = function () {
        if (!this.parser) {
            this.parser = new Parser();
        }
        return Parser.parser;
    };
    Parser.prototype.parseConfig = function () {
        var _this = this;
        eachLine('test.txt', function (line) {
            //if line contains /\[.*\]/ groupName will be changed
            _this.flags.setFlag(line);
            switch (_this.flags.groupName) {
                case GroupNames.CONTROLLER_VERSION: {
                    console.log(line);
                    _this.config.parseVersion(line);
                    break;
                }
                case GroupNames.CONTROLLER_TYPES: {
                    break;
                }
            }
        }).then(function () {
            console.log(_this.config);
        });
    };
    return Parser;
}());
exports.default = Parser;
