const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/s_muotoe'
// const url = 'http://dev.cs.smu.ca:8150'

const app = express()
app.use(express.json())

const cors = require('cors')
app.use(cors())

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })

const con = mongoose.connection

con.on('open', () => {
    console.log('Connected...')
})

const universityRouter = require('./routes/university')
app.use('/university', universityRouter)
app.listen(8150, () => {
    console.log('Server connected')
})
