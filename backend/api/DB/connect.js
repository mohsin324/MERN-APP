require('dotenv').config();
const mongoose = require('mongoose');
const mongoURL = process.env.mongoURL;

const connect = mongoose.connect(mongoURL, {
    useNewUrlParser: false
})

module.exports = connect