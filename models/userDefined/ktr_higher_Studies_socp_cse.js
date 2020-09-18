const mongoose=require('mongoose')


var date=new Date()
var a=date.toDateString()

const schema=mongoose.Schema({
    date:{
        type:String,      
        default:a,
        required:true
      },
        month:{
            type:String,
            required:true
        },
        year:{
            type:String,
            required:true
        },
        students_went_for_higher_studies:{
            type:Number,
            required:true
        },
        universityName:{
            type:String,
            required:true
        }
})



module.exports=mongoose.model('ktr_higher_studies_socp_cse',schema)