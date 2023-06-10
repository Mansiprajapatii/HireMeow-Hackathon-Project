const mongoose = require('mongoose')

const userDetails = new mongoose.Schema({
    name:{
        type: String,
        required : false
    },
    phone:{
        type:Number,
        required : false
    },
    email:{
        type:String,
        required : false,
    },
    school:{
        type: String,
        required : false
    },
    tenPer:{
        type:Number,
        required : false
    },
    twelPer:{
        type:Number,
        required : false,
    },
    board:{
        type: String,
        required : false
    },
    cgpa:{
        type:Number,
        required : false
    },
    clgName:{
        type:String,
        required : false,
    },
    gradYear:{
        type:Number,
        required : false
    },
    proj:{
        type:[String],
        required:false
    }

})

module.exports = mongoose.model('UserDetails', userDetails, 'UserDetails')