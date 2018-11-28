const express = require("express")
const router = express.Router();
const fs = require("fs")

//Post delete image
router.post("/", (req, res)=>{
    console.log(req.body)
})

module.exports = router;