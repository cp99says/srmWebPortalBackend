const mongoose=require('mongoose')

const projectSchema=mongoose.Schema({
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