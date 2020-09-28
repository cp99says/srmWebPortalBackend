const mongoose=require('mongoose')


var date=new Date()
var a=date.toDateString()

const projectSchema=mongoose.Schema({
    date:{type:String,default:a,required:true},
    funded_projects:{
        applied:{type:Number,required:true},
        ongoing:{type:Number,required:true},
        completed:{type:Number,required:true}
    },
    consultancy_projects:{
        applied:{type:Number,required:true},
        ongoing:{type:Number,required:true},
        completed:{type:Number,required:true}
    },
    inhouse_projects:{
        applied:{type:Number,required:true},
        ongoing:{type:Number,required:true},
        completed:{type:Number,required:true}
    }
    
})

module.exports=mongoose.model('ktr_project_details_socp_cse',projectSchema)