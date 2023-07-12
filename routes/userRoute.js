const express = require("express");
const router = express.Router();
const { registerUser,loginUser, currentUser } = require("../controllers/userController");
const validationToken =  require("../middleware/validatedTokenHandler");

router.route("/register").post(registerUser);

router.route("/login").post(loginUser);
// Need middleware to validated the access token. that token is passed into API as Barear token.
router.get("/current", validationToken,currentUser);
module.exports = router;