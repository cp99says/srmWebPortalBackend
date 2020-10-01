const jwt = require('jsonwebtoken')
module.exports=function auth(req, res, next) {
    const token = req.header('auth-token');
    if (!token) return res.status(401).send('Acess Denied');

    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET)    
        if(verified.role == 'hod'){
          next()    
        }
        else{
            res.send('unauthorized access')
        }
        // res.status(201).json(verified)
        // console.log(verified.role)
        
    } catch(err){
          res.status(400).send('invalid token')
    }
    
}