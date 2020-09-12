const mongoose=require('mongoose')


const campuses=mongoose.Schema({
    campus_code:{
        type:Number,        
    },
    campus_name:{
        type:String
    }
})



module.exports=mongoose.model('campuses',campuses)