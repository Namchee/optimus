const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const mobileMoviesLogger = require('./../src/logger')
const routes = require('./routes')

const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(logger('dev'))
app.use('/', routes)

app.listen(port, () => {
  mobileMoviesLogger.info(`app is running on localhost:${port}`)
})
