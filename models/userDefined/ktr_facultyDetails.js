const mongoose=require('mongoose')


const ktr_facultyDetailsSchema=mongoose.Schema({
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
    }
})

module.exports=mongoose.model('ktr_faculty_Details',ktr_facultyDetailsSchema)