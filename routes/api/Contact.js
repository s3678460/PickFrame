const express = require("express");
const router = express.Router();

//contact model
const Contact = require("../../models/Contact");

//load validate input
const validateContactInput = require("../../validation/contact");

//@route POST api/contact
//@desc make a contact
//@access Public

router.post('/', (req,res) =>{
    const { errors, isValid } = validateContactInput(req.body);
    if(!isValid){
        return res.status(400).json(errors)
    }
    const newContact = new Contact({
        name: req.body.name,
        phoneNumber: req.body.phoneNumber,
        email: req.body.email,
        message: req.body.message,

    })
    newContact.save()
    .then(contact => res.json(contact));

});
//@route GET api/contacts
//@desc GET ALL contacts
//@access Public

router.get("/",(req,res) => {
    Contact.find()
    .then(contact => res.json(contact));
})
//@route Delect api/contacts
//@desc  Declet contacts
//@access Public

router.delete("/:_id",(req,res) => {
    Contact.findByIdAndRemove(req.params._id)
    .then(removecontact => res.json(removecontact))
    .catch(errcontact => res.status(404).json("Delect unsuccessfully"));
})

module.exports = router;