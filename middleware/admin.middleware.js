
const admin = (req,res,next)=>{
    const {email,password} = req.body

if(email === "admin@gmail.com"){
    if(password === "admin"){
       next();
    }else{
       res.send("You are not authorised to do this operation")
      }
  }else{
   res.send("You are not authorised to do this operation")
  }
}

module.exports={
    admin
}