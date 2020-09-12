const mongoose=require('mongoose')


const studentDetails_schema=mongoose.Schema({
    ug1:{
        type:Number,
        required:true
    },
    ug2:{
        type:Number,
        required:true
    },
    ug3:{
        type:Number,
        required:true
    },
    ug4:{
        type:Number,
        required:true
    },
    pg1:{
        type:Number,
        required:true
    },
    pg2:{
        type:Number,
        required:true
    },
    phdi:{
        type:Number,
        required:true
    },
    phde:{
        type:Number,
        required:true
    },
    phdf:{
        type:Number,
        required:true
    },


})
module.exports=mongoose.model('Student_Details',studentDetails_schema)