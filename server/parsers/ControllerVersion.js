class ControllerVersion {
    static parse(line) {
        console.log(line.split(': ')[1]);
        return line.split(': ')[1];
    }
}

module.exports = ControllerVersion;