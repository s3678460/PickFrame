const express = require("express")
const router = express.Router();

//User model
const User = require("../../models/User")


//@route GET api/users
//@desc GET ALL users
//@access Public

router.get("/", (req,res)=>{
    User.find()
    .then(users => res.json(users))
})


//@route POST api/user
//@desc Create an user
//@access Public

router.post('/', (req,res)=>{
    const newUser = new User({
        fullName: req.body.fullName,
        displayName: req.body.displayName,
        email: req.body.email,
        password: req.body.password,
        accountHolder: req.body.accountHolder,
        cardNumber: req.body.cardNumber,
        bankName: req.body.bankName,
        bankBranch: req.body.bankBranch
    })
    newUser.save().then(user => res.json(user))
})

//@route DELETE api/user
//@desc Delete an user
//@access Public

router.delete('/:_id', (req, res)=>{
    User.findByIdAndRemove(req.params._id)
    .then(removedUser => res.send(removedUser))
    .catch(err => res.status(404).json({success: false}))
})


//@route UPDATE api/user
//@desc update an user
//@access Public

router.put('/:_id', (req, res)=>{
    var update = req.body;
    User.findByIdAndUpdate(req.params._id, update)
    .then(()=> res.json({update: true}))
    .catch(err => res.status(404).json({update: false}))
})

//@route GET api/user
//@desc GET an user
//@access Public

router.get('/:_id', (req, res)=>{
    User.findById(req.params._id)
    .then(user => res.json(user))
    .catch(err => res.status(404).json({get: false}))
})

module.exports = router;