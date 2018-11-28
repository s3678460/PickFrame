const express = require("express")
const router = express.Router();
const fs = require("fs")
const path = require("path")

//Post delete image
router.post("/", (req, res) => {
    //delete local image
    var filepath = path.join(__dirname, `../../client/public/storageimages/${req.body.imageLink}`)
    fs.unlinkSync(filepath);
}) 

module.exports = router;