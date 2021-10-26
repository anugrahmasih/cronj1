// this is how you import packages or lib in node

const express = require('express')
const mongoose = require('mongoose')
//db url
const url = 'mongodb://localhost/AlienDBex'


//this is how you start your express
const app = express()

//now how to connect with database
mongoose.connect(url, { useNewUrlParser: true })    //2part to avoid warnings
const con = mongoose.connection      //holds old connection with db
//this is callback func to open db

con.on('open', function () {
    console.log('your DB connected..')
})

//for listening diff routes
app.listen(9000, function () {
    console.log('Server started....')
})

app.use(express.json())



//now creat routers

const alienRouter = require('./routes/aliens')
//now add a middleware
app.use('/aliens', alienRouter)     // for all rout request send it to alienRouter



