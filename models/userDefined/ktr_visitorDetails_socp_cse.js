const mongoose=require('mongoose')

var date=new Date()
var a=date.toDateString()

const visDetails=mongoose.Schema({
    date:{
        type:String,      
        default:a,
        required:true
      },
    foreign_professors:{
        visited_campus:{type:Number,required:true},
        online:{type:Number,required:true}
    },
    alumni:{
        visited_campus:{type:Number,required:true},
        online:{type:Number,required:true}
    },
    industrialists:{
        visited_campus:{type:Number,required:true},
        online:{type:Number,required:true}
    }
})

module.exports=mongoose.model('ktr_visitor_details_socp_cse',visDetails)