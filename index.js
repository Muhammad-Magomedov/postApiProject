const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3001;

app.use(express.json);
app.use(express.urlencoded({extended: true}));

async function start () {
    try {
        await mongoose.connect('mongodb+srv://Mutaliev:Intocode@cluster0.chyad.mongodb.net/blogApi', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        app.listen(port, () => {
            console.log('Сервер запущен...')
        })
    } catch (e) {
        console.log(e)
    }
}

start();