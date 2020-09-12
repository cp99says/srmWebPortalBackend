const express=require('express')
const app=express()
const campus=require('../models/predefined/campus')
const schools=require('../models/predefined/schools')
const dept=require('../models/predefined/dept')
const socp=require('./department/checkDepartment')
const faculty_details=require('../routes/faculty/faculty_details')

app.use('/socp',socp)
//   app.use('/soce')
//   app.use('/soaid')
//   app.use('/some')
app.use('/details',faculty_details)




// app.post('/campus',async (req,res)=>{
//     try{
//         const data=await campus.create(req.body)
//         res.status(201).json({
//             message:'success',
//             data
//         })
//     }
//     catch(err){
//         console.log(err)
//         res.status(401).json({
//             message:'failure',
//             err
//         })
//     }
// })

// app.post('/schools',async (req,res)=>{
//     try{
//         const data=await schools.create(req.body)
//         res.status(201).json({
//             message:'success',
//             data
//         })
//     }
//     catch(err){
//         console.log(err)
//         res.status(401).json({
//             message:'failure',
//             err
//         })
//     }
// })

// app.post('/dept',async (req,res)=>{
//     try{
//         const data=await dept.create(req.body)
//         res.status(201).json({
//             message:'success',
//             data
//         })
//     }
//     catch(err){
//         console.log(err)
//         res.status(401).json({
//             message:'failure',
//             err
//         })
//     }
// })


module.exports=app