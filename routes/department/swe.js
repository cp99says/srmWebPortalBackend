const express=require('express')
const app=express()
const swe_schema=require('../../models/userDefined/studentDetails_socp_swe')

app.post('/student_details', async (req,res)=>{
    try{        
        const ug1=req.body.ug1
        const ug2=req.body.ug2
        const ug3=req.body.ug3
        const ug4=req.body.ug4
        const pg1=req.body.pg1
        const pg2=req.body.pg2
        const phdi=req.body.phdi
        const phde=req.body.phde
        const phdf=req.body.phdf
        const totalUG=ug1+ug2+ug3+ug4
        const totalPG=pg1+pg2
        const totalPhd=phdi+phde+phdf
        const totalStudents=totalPG+totalUG+totalPhd

        const sd=await swe_schema.create(req.body)
        //console.log(totalStudents)
        res.status(201).json({
            message:'success',
            totalUG,
            totalPG,
            totalPhd,
            totalStudents
        })
    }
    catch(err){
        console.log(err)
        res.status(401).json({
            message:'failure',
            err 
        })
    }
})

app.get('/student_details', async (req,res)=>{
    try{
        const data= await swe_schema.find()
        res.status(201).json({
            message:'success',
            data
        })
    }
    catch(err){
        console.log(err)
        res.status(401).json({
            message:'failure',
            err
        })
    }
    
})


module.exports=app