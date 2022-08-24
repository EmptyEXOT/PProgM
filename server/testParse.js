"use strict";
exports.__esModule = true;
var lineReader = require('line-reader');
Promise = require('bluebird');
var eachLine = Promise.promisify(lineReader.eachLine);
function parse() {
    lineReader.eachLine('test2.txt', function (line, last) {
        console.log(line);
        if (last)
            console.log('finished');
    });
}
exports["default"] = parse;
