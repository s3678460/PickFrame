const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");

//Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

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
    const {errors, isValid} =validateRegisterInput(req.body);

    if(!isValid){
        return res.status(400).json(errors)
    }    
    User.findOne({ email: req.body.email }).then(user => {
        if (user) {
            errors.email = "Email already exists"
            return res.status(400).json(errors)
        } else {
            const newUser = new User({
                fullName: req.body.fullName,
                displayName: req.body.displayName,
                email: req.body.email,
                password: req.body.password,
                accountHolder: req.body.accountHolder,
                cardNumber: req.body.cardNumber,
                bankName: req.body.bankName,
                bankBranch: req.body.bankBranch,
                balance:0,
            });
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err;
                    newUser.password = hash;
                    newUser.save().then(user => res.json(user))
                        .catch(err => console.log(err));
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
  var update = req.body;
  User.findByIdAndUpdate(req.params._id, update, { new: true })
    .then(user => res.json(user))
    .catch(err => res.status(404).json({ update: false }));
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

  // Find user by email

  User.findOne({ email }).then(user => {
    //Check for user
    if (!user) {
      errors.email = "User not found";
      return res.status(404).json(errors);
    }

    //Check for password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        //User Matched
        const payload = {
          id: user.id,
          fullName: user.fullName,
          displayName: user.displayName,
          email:user.email,
          accountHolder:user.accountHolder,
          cardNumber:user.cardNumber,
          bankName:user.bankName,
          bankBranch:user.bankBranch
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
        id:req.user.id,
        fullName: req.user.fullName,
        displayName: req.user.displayName,
        email: req.user.email,
        accountHolder: req.user.accountHolder,
        cardNumber: req.user.cardNumber,
        bankName: req.user.bankName,
        bankBranch: req.user.bankBranch,
        balance:0,

    })
})

module.exports = router;
