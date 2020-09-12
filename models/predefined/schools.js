const mongoose=require('mongoose')


const schools=mongoose.Schema({
    school_code:{
        type:Number,        
    },
    school_name:{
        type:String
    }
})

module.exports=mongoose.model('schools',schools)