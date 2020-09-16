const mongoose=require('mongoose')


const placementSchema=mongoose.Schema({
    dateInterview:{
        type:String,
        required:true
    },
    company_name:{
        type:String,
        required:true
    },
    students_eligible:{
        type:Number,
        required:true
    },
    students_attended:{
        type:Number,
        required:true
    },
    selected_students:{
        type:Number,
        required:true
    }

})
module.exports=mongoose.model('ktr_placement_details_socp_cse',placementSchema)