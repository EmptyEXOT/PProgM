"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Flags_1 = require("./LineCheckers/Flags");
var LineParser_1 = require("./parsers/LineParser");
var lineReader = require('line-reader');
// let Promise = require('bluebird');
var ControllerConfig_1 = require("./ControllerConfig");
// import {setTimeout} from "timers";
// import {serialize} from "v8";
// let eachLine = Promise.promisify(lineReader.eachLine)
var Parser = /** @class */ (function () {
    function Parser() {
        this.flags = new Flags_1.default();
        this.lineParser = new LineParser_1.default();
        this.config = ControllerConfig_1.default.createConfig();
    }
    Parser.makeParser = function () {
        if (!this.parser) {
            this.parser = new Parser();
        }
        return Parser.parser;
    };
    Parser.prototype.parseConfig = function () {
        var _this = this;
        return new Promise(function (resolve) {
            lineReader.eachLine('test.txt', function (line, last) {
                //if line contains /\[.*\]/ groupName will be changed
                _this.flags.setFlag(line);
                _this.lineParser.parseLine(line, _this.flags.groupName, _this.config);
                if (last)
                    resolve(_this.config);
            });
        });
    };
    return Parser;
}());
exports.default = Parser;
