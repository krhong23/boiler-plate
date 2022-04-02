const express = require('express')
const app = express()
const port = 5001

// Mongo DB Connection
const mongoose = require('mongoose')
mongoose.connect('mongodb://rami:rami!2345@cluster0-shard-00-00.ioixk.mongodb.net:27017,cluster0-shard-00-01.ioixk.mongodb.net:27017,cluster0-shard-00-02.ioixk.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-47q39o-shard-0&authSource=admin&retryWrites=true&w=majority').then(()=> console.log('MongoDB Connected..'))
    .catch(err => console.log(err))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})