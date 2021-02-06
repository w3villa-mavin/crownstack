const express = require('express')
const http = require('http')
const path = require('path')
const morgan = require("morgan")
const mongoDB = require('./config/mongoose-db')
const PORT = 3000; // set env with "export PORT=5000 " or in nodemon.json for nodemon 
const app = express()
const server = http.createServer(http)
const Currency = require("./api/models/currency");
const SEED = require('./config/data.json')


app.use(express.urlencoded({ extended: true }))

app.use(require('cors')({ origin: ['http://localhost:4200'], credentials: true }))
app.use(express.json())
app.use(morgan('dev')) //log route requests

//root url
app.use("/currency", require("./api/routes/currency"))

app.get('/', function (req, res) {
  res.send('hello world')
})

//connect to mongodb
mongoDB.connect()
  .then(async (connection) => {

    console.log('MongoDB Connected successfully')
    await Currency.remove({})

    Currency.insertMany(SEED, function (error, docs) {
      if (error) {
        console.log(error)
      } else {
        console.log("Currency Inserted Successfully")
        app.listen(PORT, () => console.log(`listning on port ${PORT}...`))
      }

    });


  }).catch((err) => console.log('Failed to connect to mongo DB ', err))






