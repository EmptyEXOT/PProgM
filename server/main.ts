import ControllerConfig from "./parser2/ControllerConfig";

const express = require('express');
const multer = require('multer');
import Parser from "./parser2/Parser";
import {setTimeout} from "timers";

const parseConfig = require('./parser.js')

const app = express();

app.use(multer({dest: 'uploads'}).single('avatar'));

app.get('/', (req, res) => {
    res.send(`
    <form action="/parse" method="post" enctype="multipart/form-data">
        <input type="file" name="avatar" />
        <input type="submit" name="send" /> 
    </form>
    `);
})

function hello() {
    return new Promise(resolve => {
            setTimeout(()=>{
            resolve('hello');
        }, 1000)
    } )
}

app.post('/parse', async (req, res) => {
    const parser = Parser.makeParser();
    let result = await parser.parseConfig();
    console.log(result);
    return res.send(result);
})

app.listen(3000, '127.0.0.1', () => {
    console.log('server started');
})




