//singletone class, contains methods for parsing config
/*
*   person push config 'name.txt'
*   creating instance of Config
*   app.post('/handler', (req, res)=>{
*       const config = new Config(getting name via multer package)
*   })
 */
class Config {
    constructor(configName = configName) {
        this.configName = configName;
    }
}
