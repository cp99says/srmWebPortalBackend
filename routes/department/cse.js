const express=require('express')
const app=express()
const studDet=require('../../models/userDefined/studentDetails_socp_cse')
const facultySchema=require('../../models/userDefined/ktr_facultyDetails_socp_cse')


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

        const sd=await studDet.create(req.body)
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
        const data= await studDet.find()
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

app.post('/faculty_details', async (req,res)=>{
    try{
        const data=await facultySchema.create(req.body)
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

app.get('/faculty_details', async (req,res)=>{
    try{
        const data=await facultySchema.find()
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