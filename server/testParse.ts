const lineReader = require('line-reader');
Promise = require('bluebird');

let eachLine = Promise.promisify(lineReader.eachLine);
export default function parse() {

    lineReader.eachLine('test2.txt', (line, last) => {
        console.log(line);
        if (last) console.log('finished');
    })

}
