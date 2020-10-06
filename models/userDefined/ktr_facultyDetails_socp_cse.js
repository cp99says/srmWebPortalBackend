const mongoose=require('mongoose')
var date=new Date()
var a=date.toDateString()

const ktr_facultyDetailsSchema=mongoose.Schema({
    date:{
        type:String,      
        default:a,
        required:true
      },
    af:{
        type:Number,
        required:true
    },
    profs:{
        type:Number,
        required:true
    },
    assProfs:{
        type:Number,
        required:true
    },
    apWithPhd:{
        type:Number,
        required:true
    },
    apWithoutPhd:{
        type:Number,
        required:true
    },
    file:{
        type:String
    }
})

module.exports=mongoose.model('ktr_faculty_Details_socp_cse',ktr_facultyDetailsSchema)