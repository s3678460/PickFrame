const express = require("express");
const router = express.Router();

var nodemailer = require("nodemailer");

router.post("/", (req, res) => {
  console.log("form post request");
  nodemailer.createTestAccount((err, account) => {
    const htmlEmail =
      req.body.message === "approve"
        ? `<p>Congratulations, your request for image <b>${
            req.body.imageID
          }</b> is approved.<p>`
        : `<p>Your request for image <b>${
            req.body.imageID
          }</b> is rejected for the following reasons: <b>${
            req.body.message
          }</b>.</p>`;
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
      subject:
        req.body.message === "approve" ? "Image Approved" : "Image Rejected",
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
