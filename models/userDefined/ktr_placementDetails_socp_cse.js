const mongoose=require('mongoose')


var date=new Date()
var a=date.toDateString()

const placementSchema=mongoose.Schema({
    date:{
        type:String,      
        default:a,
        required:true
      },
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