import Flags from './LineCheckers/Flags';
import LineParser from "./parsers/LineParser";

const lineReader = require('line-reader');
// let Promise = require('bluebird');
import ControllerConfig from './ControllerConfig'
// import {setTimeout} from "timers";
// import {serialize} from "v8";

// let eachLine = Promise.promisify(lineReader.eachLine)

export default class Parser {
    constructor() {
        this.flags = new Flags();
        this.lineParser = new LineParser();
        this.config = ControllerConfig.createConfig();
    }

    private lineParser: LineParser
    private flags: Flags;
    private config: ControllerConfig;

    private static parser: Parser;

    public static makeParser() {
        if (!this.parser) {
            this.parser = new Parser();
        }
        return Parser.parser;
    }

    public parseConfig() {
        return new Promise(resolve => {
            lineReader.eachLine('test.txt', (line, last) => {

                //if line contains /\[.*\]/ groupName will be changed
                this.flags.setFlag(line);

                this.lineParser.parseLine(line, this.flags.groupName, this.config);
                
                if (last) resolve(this.config);
            })
        })

    }
}









