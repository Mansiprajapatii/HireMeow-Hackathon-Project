const mongoose = require('mongoose')

const github = new mongoose.Schema({
    link:{
        type: String,
        required : false
    },
    proj:{
        type:[String],
        required : false
    }
})

module.exports = mongoose.model('github', github, 'github')