let express = require('express');
let app = express();
require('dotenv').config()

app.use('/public', express.static(
    __dirname + '/public'
))

app.get('/',
    (req, res) => {
        res.sendFile(__dirname + '/views/index.html')
    }
)


const message = 'Hello json'

console.log(process.env.MESSAGE_STYLE)

app.get("/json", (req, res) => {
    res.json({
      message: process.env.MESSAGE_STYLE === 'uppercase' ? message.toUpperCase() : message
    });
  });





























 module.exports = app;
