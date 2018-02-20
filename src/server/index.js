const path = require('path')
const express = require('express')
const compression = require('compression')

const app = express()

app.use(compression())
app.disable('x-powered-by')
app.use(express.static(path.join(__dirname, '..', '..', 'static')))

module.exports = {
  app
}
