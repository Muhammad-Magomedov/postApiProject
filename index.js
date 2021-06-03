const express = require('express');
const mongoose = require('mongoose');
const app = express();
const config = require('./config/index');
const router = require("./routes/index")

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(router)
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