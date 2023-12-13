
const client = require('./db_connection.js')
const express = require('express')
const bodyParser = require('body-parser');
const urlencodedParser =bodyParser.urlencoded({extended: false});
const app = express()
const port = 5000


app.use(express.json())
app.use (express.static('public'))

app.listen(port,  () => {console.log (`Cервер запущен ${port}`)})
client.connect();