const express=require('express')
const app=express()
const studDet=require('../../models/userDefined/studentDetails_socp_cse')
const facultySchema=require('../../models/userDefined/ktr_facultyDetails_socp_cse')
const campus=require('../../models/predefined/campus')
const school=require('../../models/predefined/schools')
const dept=require('../../models/predefined/dept')
const cse_placement=require('../../models/userDefined/ktr_placementDetails_socp_cse')
const higher_studies=require('./../../models/userDefined/ktr_higher_Studies_socp_cse')
const visitor_details=require('./../../models/userDefined/ktr_visitorDetails_socp_cse')
const patent=require('./../../models/userDefined/ktr_patentDetails_socp_cse')
const project=require('./../../models/userDefined/ktr_project_details_socp_cse')
const publication=require('./../../models/userDefined/ktr_publicationDetails_socp_cse')
const student_activity=require('./../../models/userDefined/ktr_studentActivities_socp_cse')

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
        const data2=await campus.find({"campus_code":"1"}, (err,doc)=>{
            //console.log(doc)
        })
        res.status(201).json({
            message:'success',
            data,
            data2
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

app.post('/placement_details', async (req,res)=>{
    try{
        const data=await cse_placement.create(req.body)        
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

app.get('/placement_details', async (req,res)=>{
    try{
        const data= await cse_placement.find()
        const data2=await campus.find({"campus_code":"1"}, (err,doc)=>{
           // console.log(doc)
        })
        const data3=await dept.find({"dept_code":"1"},(err,doc)=>{
           // console.log(doc)
        })
        const data4=await school.find({"school_code":"7"},(err,doc)=>{
           // console.log(doc)
        })
        res.status(201).json({
            message:'success',
            data,
            data2,
            data3,
            data4
        })
    }
    catch(err){
        //console.log(err)
        res.status(401).json({
            message:'failure',
            err
        })
    }
})

app.post('/higher_studies', async (req,res)=>{
    try{
        const data=await higher_studies.create(req.body)
        res.status(201).json({
            message:'success',
            data
        })
    }
    catch(err){
        res.status(401).json({
            message:'failure',
            err
        })
    }   
})

app.get('/higher_studies', async (req,res)=>{
    try {
        const data=await higher_studies.find()
        const data2=await campus.find({"campus_code":"1"}, (err,doc)=>{
            //console.log(doc)
        })
        const data3=await dept.find({"dept_code":"1"},(err,doc)=>{
            //console.log(doc)
        })
        const data4=await school.find({"school_code":"7"},(err,doc)=>{
            //console.log(doc)
        })
        res.status(201).json({
            message:'success',
            data,
            data2,
            data3,
            data4
        })

    }
    catch(err){
        res.status(401).json({
            message:'failure',
            err
        })
    }
})

app.post('/visitor_details', async (req,res)=>{
    try {
         const data=await visitor_details.create(req.body)
         res.status(201).json({
         message:'success',
         data
    })
       }
       catch(err){
        res.status(401).json({
            message:'failure',
            err
        })
       } 
})

app.get('/visitor_details', async (req,res)=>{
    try {
        const data=await visitor_details.find()
        const data2=await campus.find({"campus_code":"1"}, (err,doc)=>{
            //console.log(doc)
        })
        const data3=await dept.find({"dept_code":"1"},(err,doc)=>{
            //console.log(doc)
        })
        const data4=await school.find({"school_code":"7"},(err,doc)=>{
            //console.log(doc)
        })
        res.status(201).json({
            message:'success',
            data,
            data2,
            data3,
            data4
        })
    }
    catch(err){
        res.status(401).json({
            message:'failure',
            err
        })
    }

})

app.post('/patent_details', async (req,res)=>{
    try {
        const data=await patent.create(req.body)
        res.status(201).json({
        message:'success',
        data
   })
      }
      catch(err){
       res.status(401).json({
           message:'failure',
           err
       })
      } 
})

app.get('/patent_details', async (req,res)=>{
    try{
        const data= await patent.find()
        const data2=await campus.find({"campus_code":"1"}, (err,doc)=>{
            //console.log(doc)
        })
        const data3=await dept.find({"dept_code":"1"},(err,doc)=>{
            //console.log(doc)
        })
        const data4=await school.find({"school_code":"7"},(err,doc)=>{
            //console.log(doc)
        })
        res.status(201).json({
            message:'success',
            data,
            data2,
            data3,
            data4
        })
    }
    catch(err){
        res.status(401).json({
            message:'failure',
            err
        })
    }
})

app.post('/project_details', async (req,res)=>{
    try{
      const data=await project.create(req.body)
      res.status(201).json({
        message:'success',
        data
    })
}
    catch(err){
        res.status(401).json({
            message:'failure',
            err
        })
    }
})

app.get('/project_details', async (req,res)=>{
    try{
        const data=await project.find()
        const data2=await campus.find({"campus_code":"1"}, (err,doc)=>{
            //console.log(doc)
        })
        const data3=await dept.find({"dept_code":"1"},(err,doc)=>{
            //console.log(doc)
        })
        const data4=await school.find({"school_code":"7"},(err,doc)=>{
            //console.log(doc)
        })
        res.status(201).json({
            message:'success',
            data,
            data2,
            data3,
            data4
        })
        
    }
    catch(err){
        res.status(401).json({
            message:'failure',
            err
        })
    }  

})

app.post('/publication_details', async (req,res)=>{
    try{
        const data=await publication.create(req.body)
        res.status(201).json({
          message:'success',
          data
      })
  }
      catch(err){
          res.status(401).json({
              message:'failure',
              err
          })
      }
})

app.get('/publication_details', async (req,res)=>{
    try{
        const data=await publication.find()
        const data2=await campus.find({"campus_code":"1"}, (err,doc)=>{
            //console.log(doc)
        })
        const data3=await dept.find({"dept_code":"1"},(err,doc)=>{
            //console.log(doc)
        })
        const data4=await school.find({"school_code":"7"},(err,doc)=>{
            //console.log(doc)
        })
        res.status(201).json({
            message:'success',
            data,
            data2,
            data3,
            data4
        })
        
    }
    catch(err){
        res.status(401).json({
            message:'failure',
            err
        })
    }  
})

app.post('/student_activities', async (req,res)=>{
    try{
        const data=await student_activity.create(req.body)
        res.status(201).json({
          message:'success',
          data
      })
  }
      catch(err){
          res.status(401).json({
              message:'failure',
              err
          })
      }
})

app.get('/student_activities', async (req,res)=>{
    try{
        const data=await student_activity.find()
        const data2=await campus.find({"campus_code":"1"}, (err,doc)=>{
            //console.log(doc)
        })
        const data3=await dept.find({"dept_code":"1"},(err,doc)=>{
            //console.log(doc)
        })
        const data4=await school.find({"school_code":"7"},(err,doc)=>{
            //console.log(doc)
        })
        res.status(201).json({
            message:'success',
            data,
            data2,
            data3,
            data4
        })
        
    }
    catch(err){
        res.status(401).json({
            message:'failure',
            err
        })
    }  
})
module.exports=app