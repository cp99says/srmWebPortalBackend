const express=require('express')
const mongoose=require('mongoose')
const app=express()
const api=require('./routes/api')
const student_data=require('./routes/student_data')
const cors=require('cors')


// mongoose.connect(`mongodb://localhost:27017/`,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{console.log(`db connected`)}).catch((err)=>{
//     console.log(err)
// })

 mongoose.connect(`mongodb+srv://chetan_db:chetan_pwd@cluster0.gcabm.mongodb.net/srm?retryWrites=true&w=majority`,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{console.log(`db connected`)}).catch((err)=>{
     console.log(err)

 })

app.use(express.json())
app.use(cors())
app.use('*',cors())   
app.use('/',api)

app.use('/ktr',student_data)
// app.use('/rpm')
// app.use('/vdp')
// app.use('/delhi_ncr')


const port=process.env.PORT || 3000
app.listen(port,(()=>{console.log(`server started at port : ${port}`)}))

// const port = process.env.PORT || 3500
// app.listen(port, (() => { console.log('server started at port 3500') }))