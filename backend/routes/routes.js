const { userRegisteration,userSignin,getUserName,addExperience} = require("../Controllers/userRegisteration");
const {userLogin,resetPassword, resetLogin,googlesignin,googlesigninUsername} = require("../Controllers/userLogin");
const express = require("express");
const { auth } = require("../middleware/auth");
const router = express.Router();


//User Registration
router.post("/register", userRegisteration);
router.post('/signin',userSignin);

router.get('/getusername',getUserName);
router.post("/addExperience", addExperience);

//Login
router.post("/login", userLogin);
router.post('/resetpassword',resetPassword);
router.get('/resetlogin',resetLogin);
router.post("/signingoogle",googlesignin);
router.post('/usergoogle',googlesigninUsername);

module.exports = router;