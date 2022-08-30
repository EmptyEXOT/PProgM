class ControllersList {
    static parse(line) {
        let configArr = line.split(',');
        configArr.forEach(el=>{
            el.replace(/\s/g, '');
        });

        configData.controllersList.set(+configArr[0].split(': ')[1],
            {
                controllerType: +configArr[0].split(': ')[1],
                linesCount: +configArr[1].split(': ')[1],
                relaysCount: +configArr[2].split(': ')[1],
                baseType: configArr[3].split(':')[1],
                name: configArr[4].split(': ')[1],
            })
/*
        return {
                controllerType: +configArr[0].split(': ')[1],
                linesCount: +configArr[1].split(': ')[1],
                relaysCount: +configArr[2].split(': ')[1],
                baseType: configArr[3].split(':')[1],
                name: configArr[4].split(': ')[1],
                }
*/
}}

module.exports = ControllersList
