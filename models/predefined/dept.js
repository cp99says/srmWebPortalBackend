const mongoose=require('mongoose')



const dept=mongoose.Schema({
    dept_code:{
        type:String
    },
    dept_name:{
        type:String
    }
})

module.exports=mongoose.model('department',dept)