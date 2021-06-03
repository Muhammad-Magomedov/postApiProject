const express = require('express');
const mongoose = require('mongoose');
const app = express();
const config = require('./config/index');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

async function start () {
    try {
        await mongoose.connect(config.url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        app.listen(config.port, () => {
            console.log('Сервер запущен...')
        })
    } catch (e) {
        console.log(e)
    }
}

start();