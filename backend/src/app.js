
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const app = express()

//setting
app.set('port', process.env.PORT || 4001)

//middleware
app.use(morgan('dev'))
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(cors())

//route
app.use('/api/users',require('./routes/users.js'))
app.use('/api/notes',require('./routes/notes.js'))

 
module.exports = app