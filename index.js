const express = require('express')
const app = express()
const port = 5001
const bodyParser = require('body-parser')
const config = require("./config/key")
const {User} = require("./models/User")

// application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

// application/json
app.use(bodyParser.json());

// Mongo DB Connection
const mongoose = require('mongoose')
const e = require("express");
mongoose.connect(config.mongoURI).then(() => console.log('MongoDB Connected..'))
    .catch(err => console.log(err))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/register', (req, res) => {
    // Client에서 회원 가입 시 필요한 정보들을 가져와서 데이터베이스에 저장
    const user = new User(req.body)
    // bcrypt로 암호화
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