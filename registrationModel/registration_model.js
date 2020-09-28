const mongoose=require('mongoose')



const reg_schema=mongoose.Schema({
    campus:{
          type:String,
          required:true
    },
    school:{
       type:String,
       required:true
    },
    department:{
       type:String,
       required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }

})

module.exports=mongoose.model('Registration',reg_schema)