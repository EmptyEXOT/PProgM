class ControllerVersion {
    static parse(line) {
        return line.split(': ')[1];
    }
}

module.exports = ControllerVersion;