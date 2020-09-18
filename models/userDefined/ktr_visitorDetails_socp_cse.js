const mongoose=require('mongoose')

var date=new Date()
var a=date.toDateString()

const visDetails=mongoose.Schema({
    date:{
        type:String,      
        default:a,
        required:true
      },
    visName:{
        type:String,
        required:true
    },
    organisation:{
        type:String,
        required:true
    },
    iaao:{
        type:String,
        required:true
    },
    date_of_visit:{
        type:String,
        required:true
    },
    purpose_of_visit:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model('ktr_visitor_details_socp_cse',visDetails)