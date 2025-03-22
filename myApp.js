let express = require('express');
let app = express();
require('dotenv').config()

app.use('/public', express.static(
    __dirname + '/public'
))

app.use((req, res, next) => {
    console.log(`${req.method} ${req.path} - ${req.ip}`)
    next()
})

app.get('/',
    (req, res) => {
        res.sendFile(__dirname + '/views/index.html')
    }
)


const message = 'Hello json'

app.get("/json", (req, res) => {
    res.json({
      message: process.env.MESSAGE_STYLE === 'uppercase' ? message.toUpperCase() : message
    });
  });

app.get('/now', (req, res, next) => {
    req.time = new Date().toString()
    next()
}, (req, res, next) => {
    res.send({time: req.time})
})


app.get('/:word/echo', (req, res, next) => {
    const { word } = req.params
    res.send({echo: word})
    next()
})


app.get('/name', (req, res, next) => {
    const {first, last} = req.query || {};
    res.send({name: `${first} ${last}`})
})

















 module.exports = app;
