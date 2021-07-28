const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/s_muotoe'

const app = express()
app.use(express.json())

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })

const con = mongoose.connection

con.on('open', () => {
    console.log('Connected...')
})

const universityRouter = require('./routes/university')
app.use('/university', universityRouter)
app.listen(9000, () => {
    console.log('Server connected')
})
