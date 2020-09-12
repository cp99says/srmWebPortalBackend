const express=require('express')
const app=express()
const cse=require('./cse')
const it=require('./it')
const swe=require('./swe')


 app.use('/cse',cse)
 app.use('/it',it)
 app.use('/swe',swe)



module.exports=app