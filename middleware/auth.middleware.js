const jwt = require("jsonwebtoken");

const authentication = (req,res,next) => {
    const token = req.headers.authorization;

    if(token){
        jwt.verify(token,"car_deals",(err,decoded)=>{
            if(decoded){
                req.body.user = decoded.userID;
                next();
            }else{
                console.log(err);
            }
        })
    }else{
        res.send("Login First")
    }
}

module.exports={
    authentication
}