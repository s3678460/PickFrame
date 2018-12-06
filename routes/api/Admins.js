const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");
//Admin model
const Admin = require("../../models/Admin");

// @route GET api/admins/login
// @desc Login Admin / Returning JWT Token
// @access Public
router.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  // Find admin by email
  Admin.findOne({ email }).then(admin => {
    // Check for admin
    if (!admin) {
      return res.status(404).json({ email: "User not found" });
    }
    // Check password
    if (password === admin.password) {
      // Admin matched
      const payload = {
        id: admin._id,
        fullName: admin.fullName,
        displayName: admin.displayName
      }; // create JWT payload

      // Sign token
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
      return res.status(400).json({ password: "Password incorrect" });
    }
  });
});

// @route GET api/admins/current
// @desc Return current admin
// @access Private
router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json({
      id: req.user._id,
      fullName: req.user.name,
      displayName: req.user.displayName,
      email: req.user.email
    });
  }
);
module.exports = router;
