const express = require("express")
const router = express.Router();

//Admin model
const Admin = require("../../models/Admin")


//@route GET api/admins
//@desc GET ALL admins
//@access Public

router.get("/", (req,res)=>{
    Admin.find()
    .then(admins => res.json(admins))
})


//@route POST api/admin
//@desc Create an admin
//@access Public

router.post('/', (req,res)=>{
    const newAdmin = new Admin({
        fullName: req.body.fullName,
        displayName: req.body.displayName,
        email: req.body.email,
        password: req.body.password
    })
    newAdmin.save().then(admin => res.json(admin))
})

//@route DELETE api/admin
//@desc Delete an admin
//@access Public

router.delete('/:_id', (req, res)=>{
    Admin.findByIdAndRemove(req.params._id)
    .then(removedAdmin => res.send(removedAdmin))
    .catch(err => res.status(404).json({success: false}))
})


//@route UPDATE api/admin
//@desc update an admin
//@access Public

router.put('/:_id', (req, res)=>{
    var update = req.body;
    Admin.findByIdAndUpdate(req.params._id, update)
    .then(()=> res.json({update: true}))
    .catch(err => res.status(404).json({update: false}))
})

//@route GET api/admin
//@desc GET an admin
//@access Public

router.get('/:_id', (req, res)=>{
    Admin.findById(req.params._id)
    .then(admin => res.json(admin))
    .catch(err => res.status(404).json({get: false}))
})

module.exports = router;