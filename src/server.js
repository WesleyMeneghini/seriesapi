const express = require('express')
const app = express()

app.use(express.json())

let allowCrossDomais = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', '*')
    next()
}

app.use(allowCrossDomais)

const auth = require('./routes/authRoutes')
const series = require('./routes/seriesRoutes')

app.use('/auth', auth)
app.use('/series', series)

module.exports = app