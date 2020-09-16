const mongoose=require('mongoose')


const schema=mongoose.Schema({
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