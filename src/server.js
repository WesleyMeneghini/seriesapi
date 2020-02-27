const express = require('express')
const app = express()
const authMidd = require('./middlewares/auth')
const cors = require('cors')

app.use(cors())
app.use(express.json())

// let allowCrossDomais = (req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*')
//     res.header('Access-Control-Allow-Headers', '*')
//     res.header('Access-Control-Allow-Methods', '*')
//     next()
// // }

// app.use(allowCrossDomais)

const auth = require('./routes/authRoutes')
const series = require('./routes/seriesRoutes')
const generos = require('./routes/generosRoutes')

app.use('/auth', auth)

app.use(authMidd)
app.use('/generos', generos)
app.use('/series', series)

module.exports = app