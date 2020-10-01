const jwt = require('jsonwebtoken')
module.exports=function auth(req, res, next) {
    const token = req.header('auth-token');
    if (!token) return res.status(401).send('Acess Denied');

    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET)    
        if(verified.campus == 'ktr' && verified.school == 'school of computing' && 
        (verified.role == 'hod' || verified.role == 'chairperson')){
         next()
        }
        else{
            res.send('unauthorized access')
        }
        // res.status(201).json(verified)
        // console.log(verified.role)
        
    } catch(err){
        console.log(err)
          res.status(400).send('invalid token')
    }
    
}