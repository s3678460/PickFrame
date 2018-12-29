const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");
const randomstring = require('randomstring')
const joi = require('joi')
const mailer = require('../misc/mailer')

//Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");
const validateEditProfile = require("../../validation/edit");
const validateEditPasswordProfile = require("../../validation/edit-password");
const validateTokenInput = require("../../validation/token-verification")

//Load User model
const User = require("../../models/User");

//@route GET api/users
//@desc GET ALL users
//@access Public

router.get("/", (req, res) => {
  User.find().then(users => res.json(users));
});

router.get("/:_id", (req, res) => {
  User.findById(req.params._id)
    .then(user => res.json(user))
    .catch(err => res.status(404).json({ get: false }));
});

//@route POST api/user/register
//@desc Register an user
//@access Public

router.post('/register', (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);
  const result = joi.validate(req.body)
  if (!isValid) {
    return res.status(400).json(errors)
  }
  //Generate Secret Token
  const secretToken = randomstring.generate(8);
  result.value.secretToken = secretToken;

  //Mail Body
  const html = `Hi there,
      <br/>
      YOU ARE ON THE WAY!
      Thank you for registering!
      <br/><br/>
      Please verify your email by typing the following token:
      <br/>
      Token: <b>${secretToken}<b/>
      <br/>
      On the following page:
      <a href="http://pickframe.tk/verification">http://pickframe.tk/verification</a>
      <br/>
      <br/>
      Have a good day!
      `;


  //Flash an account as inactive
  result.value.active = false;
  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      errors.email = "Email is not working"
      return res.status(400).json(errors)
    }


    else {
      const newUser = new User({
        fullName: req.body.fullName,
        displayName: req.body.displayName,
        email: req.body.email,
        password: req.body.password,
        accountHolder: req.body.accountHolder,
        cardNumber: req.body.cardNumber,
        bankName: req.body.bankName,
        bankBranch: req.body.bankBranch,
        balance: 0,
        isPassChanged: req.body.isPassChanged,
        secretToken: req.body.secretToken,
        active: req.body.active
      });
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {

          if (err) throw err;
          newUser.password = hash;

          newUser.save().then(user => res.json(user))

            .catch(err => console.log(err));
          //Compose an email

          //Send an email
          mailer.sendEmail('admin@pickframe.com', newUser.email, 'Welcome To PickFrame! Confirmation Your Email Account', html)

        })
      })


    }
  })


})

//@route DELETE api/user
//@desc Delete an user
//@access Public

router.delete("/:_id", (req, res) => {
  User.findByIdAndRemove(req.params._id)
    .then(removedUser => res.send(removedUser))
    .catch(err => res.status(404).json({ success: false }));
});

//@route UPDATE api/user
//@desc update an user
//@access Public

router.put("/:_id", (req, res) => {
  var update = req.body
  const isPassChanged = req.body.isPassChanged

  const { errors, isValid } = validateEditProfile(req.body);

  if (!isValid) {
    return res.status(400).json(errors)
  }

  User.findByIdAndUpdate(req.params._id, update, { new: true })
    .then(user =>

      res.json(user))

    .catch(err => res.status(404).json({ update: false }));
});

// else if(isPassChanged="true"){
//   if(!isValid){
//     return res.status(400).json(errors)
//   }
//   bcrypt.genSalt(10,(err,salt)=>{
//     bcrypt.hash(update.password,salt,(err,hash)=>{
//       if (err) throw err;
//       update.password=hash;
//       User.findByIdAndUpdate(req.params_id,update,{new:true})
//       .then (user=>res.json(user))
//       .catch(err=>res.status(404).json({update:false}));
//     })
//   })
// }


//@route UPDATE api/user/password
//@desc update an user
//@access Public

router.put('/password/:_id', (req, res) => {
  var password = req.body
  const { errors, isValid } = validateEditPasswordProfile(req.body);
  if (!isValid) {
    return res.status(400).json(errors)
  }
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password.password, salt, (err, hash) => {
      if (err) throw err;
      password.password = hash;
      User.findByIdAndUpdate(req.params._id, password, { new: true })
        .then(user => res.json(user))
        .catch(err => res.status(404).json({ update: false }));
    })
  })
});


//@route GET api/users/login
//@desc Login User / Returning JWT Token
//@access Public

router.post("/login", (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;
  const active = req.body.active;

  // Find user by email

  User.findOne({ email }).then(user => {
    //Check for user
    if (!user) {
      errors.email = "User not found";
      return res.status(404).json(errors);
    }
    if (!user.active) {
      errors.email = "You have to verify first";
      return res.status(404).json(errors)
    }


    //Check for password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        //User Matched
        const payload = {
          id: user.id,
          fullName: user.fullName,
          displayName: user.displayName,
          email: user.email,
          password: user.password,
          accountHolder: user.accountHolder,
          cardNumber: user.cardNumber,
          bankName: user.bankName,
          bankBranch: user.bankBranch,
          isPassChanged: user.isPassChanged,
        }; //Create JWT payload
        //Sign Token
        jwt.sign(
          payload,
          keys.secretOrKey,
          { expiresIn: 3600 },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
          }
        );
      } else {
        errors.password = "Password incorrect";
        return res.status(400).json(errors);
      }
    });
  });
});

//@route GET api/users/current
//@desc Return current user
//@access Private

router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json({
      id: req.user.id,
      fullName: req.user.fullName,
      displayName: req.user.displayName,
      email: req.user.email,
      password: req.user.password,
      accountHolder: req.user.accountHolder,
      cardNumber: req.user.cardNumber,
      bankName: req.user.bankName,
      bankBranch: req.user.bankBranch,
      balance: 0,
      isPassChanged: false,

    })
  })

// router.post('/verify', async (req, res, next) => {
//   try {
//     const secretToken = req.body.secretToken;
//     const active = req.body.active

//     const user = await User.findOne({ 'secretToken': secretToken });
//     if (!user) {
//       res.json('No User Found')
      
//       return;
//     }
//     user.active = true
//     user.secretToken = '';
//     await user.save();
//     res.json('Verify Successfull')
    
//   } catch (error) {
//     next(error)
//   }



// })

router.post('/verify',(req,res)=>{
  const secretToken = req.body.secretToken;
  const active = req.body.active
  const { errors, isValid } = validateTokenInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors)
  }
  const user = User.findOne({'secretToken':secretToken})
  .then(user=>{
    if(!user){
      errors.secretToken='Confirmation code is not working'
      return res.status(400).json(errors)
    }
    else{
    user.active=true
    user.secretToken=''
    user.save();
    res.json('Verify Successfull')}
  })
})


module.exports = router;
