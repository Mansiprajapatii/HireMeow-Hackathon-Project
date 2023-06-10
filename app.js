const express = require('express')
const mongoose = require('mongoose')
const Users = require('./routers/Users')
const shell = require('./Shell_Script/shell')
require('dotenv').config()


// const entryRoute = entity
const app = express()
const url = process.env.DB_URL
const port = process.env.PORT || 9000


mongoose.connect(url,{
    useNewUrlParser: true, useUnifiedTopology: true,
})
const con = mongoose.connection

con.on('open',()=>{
    console.log("connected")
})

app.use(express.json())
app.use('/Users', Users)
app.use('/git', shell)

app.listen(port,()=>{
    console.log(`Server Listening on port ${port}`)
})