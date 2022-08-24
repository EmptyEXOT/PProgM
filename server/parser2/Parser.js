"use strict";
exports.__esModule = true;
var lineReader = require('line-reader');
var Promise = require('bluebird');
var eachLine = Promise.promisify(lineReader.eachLine);
var configName = '../test2.txt';
var Parser = /** @class */ (function () {
    function Parser() {
    }
    Parser.makeParser = function () {
        if (!this.parser) {
            this.parser = new Parser();
        }
        return Parser.parser;
    };
    Parser.prototype.parseConfig = function () {
        eachLine('test2.txt', function (line, last) {
            console.log(line);
            if (last)
                console.log('finished');
        }).then(function () {
            console.log('promise');
        });
    };
    return Parser;
}());
exports["default"] = Parser;
