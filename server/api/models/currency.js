const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require("bcrypt");

const currencySchema = new Schema({
    // _id:mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true,
        unique: true
    },
    code: {
        type: String,
        required: true,
        unique: true
    },

})

module.exports = mongoose.model('Currency', currencySchema)