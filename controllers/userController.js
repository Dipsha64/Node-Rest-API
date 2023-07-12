const User = require("../models/userModel");
const bycrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
//@des Get all Users
//@route GET /api/users/register
//@access public 
const registerUser = async (req,res) => {
    const { username , email, password} = req.body;
    if(!username || !email || !password){
        res.status(400);
        throw new Error("All fields are required");
    }
    const userExist = await User.findOne({email});
    if(userExist){
        res.status(400);
        throw new Error("email address is already exist");
    }
    /**** Hash Password (Here 10 is used as saltRound to hashing the password)****/
    const hashedpassword = await bycrypt.hash(password,10);
    console.log("hashedpassword...",hashedpassword);
    const newUser = await User.create({
        username,
        email,
        password : hashedpassword
    })
    if(newUser){
        res.json({email : newUser.email , username : newUser.username});
    }
    else{
        res.status(400);
        throw new Error("Requested data is not valid, Please try it again");
    }
}

//@des Get all Users
//@route GET /api/users/login
//@access public 
const loginUser = async (req,res) => {
    const { email , password} = req.body;
    if(!email || !password){
        res.status(400);
        throw new Error("email & password is required");
    }
    const userExits = await User.findOne({email});
    // Compare Password with HASH PASSWORD IN DATABASE
    if(userExits && bycrypt.compare(password,userExits.password)){
        // Generate Access token & pass in response, Pass information in payload that which you need in access token
        const accessTokwn = jwt.sign({
            // Need this 3 field in access token. Then we need to pass access token secrets. Which used from ene file.then provide expire time of access token.after that expire token user can't acces that code again.
            user : {
                username : userExits.username,
                email : userExits.email,
                id : userExits.id
            }
        },process.env.ACCESS_TOKEN_SECRET,{expiresIn : "20m"})
        res.status(200).json({accessTokwn});
    }
    else{
        res.status(401);
        throw new Error("email Or password is not matched!!");
    };
}

//@des Get Current Users
//@route GET /api/users/current
//@access private 
// For this private route, user need authentication and access token to access that route.
const currentUser = async (req,res) => {
    res.json(req.user);
}
module.exports = {registerUser, loginUser, currentUser};