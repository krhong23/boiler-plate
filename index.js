const express = require('express')
const app = express()
const port = 5001
const bodyParser = require('body-parser')
const {User} = require("./models/User")

// application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

// application/json
app.use(bodyParser.json());

// Mongo DB Connection
const mongoose = require('mongoose')
const e = require("express");
mongoose.connect('mongodb://rami:rami!2345@cluster0-shard-00-00.ioixk.mongodb.net:27017,cluster0-shard-00-01.ioixk.mongodb.net:27017,cluster0-shard-00-02.ioixk.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-47q39o-shard-0&authSource=admin&retryWrites=true&w=majority').then(() => console.log('MongoDB Connected..'))
    .catch(err => console.log(err))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/register', (req, res) => {
    // Client에서 회원 가입 시 필요한 정보들을 가져와서 데이터베이스에 저장

    const user = new User(req.body)
    user.save((err, userInfo) => {
        if (err) return res.json({success: false, err})
        return res.status(200).json({
            success: true
        })
    })
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})