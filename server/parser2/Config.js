//singletone class, contains methods for parsing config
/*
*   person push config 'name.txt'
*   creating instance of Config
*   app.post('/handler', (req, res)=>{
*       const config = new Config(getting name via multer package)
*   })
 */
var Config = /** @class */ (function () {
    function Config(configName) {
        if (configName === void 0) { configName = configName; }
        this.configName = configName;
    }
    return Config;
}());
