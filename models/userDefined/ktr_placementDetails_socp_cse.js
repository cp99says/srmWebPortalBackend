const mongoose=require('mongoose')


var date=new Date()
var a=date.toDateString()

const placementSchema=mongoose.Schema({
    date:{type:String,default:a,required:true},
    third_year:{
         eligible:{type:Number,required:true},
              internship:{type:Number,required:true},
              placed:{type:Number,required:true},
              higher_studies:{type:Number,required:true}
    },
    fourth_year:{
        eligible:{type:Number,required:true},
         internship:{type:Number,required:true},
         placed:{type:Number,required:true},
         higher_studies:{type:Number,required:true}
    },
    file:{
        type:String
    }
   
})
module.exports=mongoose.model('ktr_placement_details_socp_cse',placementSchema)




