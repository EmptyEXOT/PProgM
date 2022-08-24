const lineReader = require('line-reader');
let Promise = require('bluebird');

let eachLine = Promise.promisify(lineReader.eachLine)

const configName = '../test2.txt'

export default class Parser {
    private static parser: Parser;

    public static makeParser() {
        if (!this.parser) {
            this.parser = new Parser();
        }
        return Parser.parser;
    }

    public parseConfig() {
        eachLine('test2.txt', (line, last)=> {
            console.log(line);
            if (last) console.log('finished');
        }).then(()=>{
            console.log('promise')
        })
    }
}







