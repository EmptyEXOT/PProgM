class Controllers {
    static chooseController(line, type) {
            configData.controllers.set(+line.split(',')[0].split(': ')[1], configData.controllersList.get(type));
            console.log(line);
    }
}

module.exports = Controllers;