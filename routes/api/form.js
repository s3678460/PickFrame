const express = require("express");
const router = express.Router();

var nodemailer = require("nodemailer");

router.post("/", (req, res) => {
  console.log("form post request");
  nodemailer.createTestAccount((err, account) => {
    const htmlEmail = `
    <h3>Image ID</h3>
    <p>${req.body.imageID}</p> 
    <h3>Rejection Reasons</h3>
    <ul>${req.body.message}</ul>
    `;
    let transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      auth: {
        user: "ehk4qdfx73rwgpah@ethereal.email",
        pass: "TvtysKar9ueJExRUEv"
      }
    });

    let mailOptions = {
      from: "admin@example.com",
      to: req.body.email,
      replyTo: "admin@example.com",
      subject: "Rejection Message",
      text: req.body.imageID,
      html: htmlEmail
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        return console.log(err);
      }
      console.log("Message send: %s", info.message);
      console.log("Message URL: %s", nodemailer.getTestMessageUrl(info));
    });
  });
});

module.exports = router;
