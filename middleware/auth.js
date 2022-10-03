const jwt = require('jsonwebtoken')

module.exports = auth = (req ,res, next) =>{
  //geting token from headers
  const token = req.header('auth-token')
  if(!token){
    res.status(401).json({
      error : "Access Denied"
    })
  }else{
    try{
      const verified = jwt.verify(token,process.env.SECRETE_KEY)
      req.user = verified;
      next()
    }catch(err){
      res.status(401).json({
        error : "Unauthorised Access"
      })
    }
  }
}
