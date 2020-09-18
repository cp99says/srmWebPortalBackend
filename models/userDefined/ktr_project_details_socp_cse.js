const mongoose=require('mongoose')


var date=new Date()
var a=date.toDateString()

const projectSchema=mongoose.Schema({
    date:{
        type:String,      
        default:a,
        required:true
      },
    projects_applied:{
        type:Number,
        required:true
    },
    projects_received:{
        type:Number,
        required:true
    },
    fic:{
        type:String,
        required:true
    },
    month:{
        type:String,
        required:true
    },
    year:{
        type:Number,
        required:true
    }
})

module.exports=mongoose.model('ktr_project_details_socp_cse',projectSchema)