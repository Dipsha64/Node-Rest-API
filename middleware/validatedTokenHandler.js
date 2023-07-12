const jwt = require("jsonwebtoken");

// This file is used as middleware
const validationToken = async (req,res,next) => {
    let token;
    let authHeader = req.headers.Authorization || req.headers.authorization;
    if(authHeader && authHeader.startsWith("Bearer")){
        token = authHeader.split(" ")[1];
        console.log("token...",token);
        // Use to verify the requested token with jwt
        jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err,decoded)=>{
            if(err){
                res.status(400);
                throw new Error("User is not authorised");
            }
            console.log(decoded);
            req.user = decoded.user;
            next();
        })
        if(!token){
            res.status(401);
            throw new Error("User is not authorised or token is missing");
        }
    }
}
module.exports = validationToken;