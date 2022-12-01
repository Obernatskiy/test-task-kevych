const express = require('express');
require('dotenv').config()
const mongoose = require('mongoose');

const  userRouter = require('./routes/train.router');
const {MONGO_URL} = require("./configs/config");

const app = express();

const cors = require('cors')

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/trains', userRouter);


app.listen(5000, () => {
    console.log('App listen 5000');
    mongoose.connect('mongodb://localhost:27017/test-task');
});