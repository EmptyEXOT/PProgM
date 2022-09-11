import ControllerConfig from "./parser2/ControllerConfig";

const express = require('express');
//const multer = require('multer');
import Parser from "./parser2/Parser";

const app = express();

//required for file loading
//app.use(multer({dest: 'uploads'}).single('avatar'));

app.get('/main', (req, res) => {
    res.send(`
    <form action="/parse" method="post" enctype="multipart/form-data">
        <input type="file" name="avatar" />
        <input type="submit" name="send" /> 
    </form>
    `);
})

app.get('/api/parse', async (req, res) => {
    const parser = Parser.makeParser();
    let result = await parser.parseConfig();
    console.log(result);
    res.send(result)
})



app.listen(3001, '127.0.0.1', () => {
    console.log('server started')
})




