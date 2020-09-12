const express=require('express')
const app=express()
const facultySchema=require('../../models/userDefined/ktr_facultyDetails')

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