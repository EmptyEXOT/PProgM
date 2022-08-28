const express = require('express');
const multer = require('multer');
import Parser from "./parser2/Parser";

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

app.use('/parse', (req, res, next) => {
    next();
})


app.post('/parse', async (req, res) => {
    const parser = Parser.makeParser();
    parser.parseConfig()
    res.send('successfully');
})

app.listen(3000, '127.0.0.1', () => {
    console.log('server started');
})
