const mongoose=require('mongoose')

var date=new Date()
var a=date.toDateString()

const publication_schema=mongoose.Schema({
    date:{type:String,default:a,required:true}, 
    papers_in_scopus:{type:Number,required:true},
      papers_in_sci:{type:Number,required:true},
      highest_impact_factor:{type:Number,required:true}
})

module.exports=mongoose.model('ktr_publication_details_socp_cse',publication_schema)