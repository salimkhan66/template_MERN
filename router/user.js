const express = require('express');
const {home, inserData, appointment}=require("../controller/controller")

const router=express.Router();

router.get("/",home);

router.post("/insert/user",inserData)
router.post("/appointment",appointment)

module.exports=router;