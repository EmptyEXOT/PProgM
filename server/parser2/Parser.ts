import Flags from './LineCheckers/Flags';

const lineReader = require('line-reader');
let Promise = require('bluebird');
import ControllerConfig from '../ControllerConfig'

let eachLine = Promise.promisify(lineReader.eachLine)

export enum GroupNames {
    CONTROLLER_VERSION = '[Версия пульта C2000]',
    CONTROLLER_TYPES = '[Типы_приборов]',
}

export default class Parser {
    constructor() {
        this.config = ControllerConfig.createConfig()
        this.flags = new Flags();
    }

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
        eachLine('test.txt', (line)=> {
            //if line contains /\[.*\]/ groupName will be changed
            this.flags.setFlag(line);

            switch (this.flags.groupName) {
                case GroupNames.CONTROLLER_VERSION: {
                    console.log(line);
                    this.config.parseVersion(line);
                    break;
                }
                case GroupNames.CONTROLLER_TYPES: {
                    break;
                }
            }

        }).then(()=>{
            console.log(this.config);
        })
    }
}







