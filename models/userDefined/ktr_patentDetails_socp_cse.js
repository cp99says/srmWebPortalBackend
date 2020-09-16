const mongosose=require('mongoose')

const patent=mongosose.Schema({
    patents_filed:{
        type:Number,
        required:true
    },
    patents_published:{
        type:Number,
        required:true
    },
    patents_granted:{
        type:Number,
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

module.exports=mongosose.model('ktr_patent_details_socp_cse',patent)