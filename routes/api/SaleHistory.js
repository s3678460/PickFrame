const express = require("express");
const router = express.Router();
const keys = require("../../config/keys");

const mongoose = require('mongoose');
const SaleHistory = require("../../models/SaleHistory");
let date = require('date-and-time');
const isEmpty = require("../../validation/is-empty");


//TESTING
router.get('/test', (req, res)=> res.json ({msg: 'posts works'}));


//@route POST api/saleHistory
//@desc Create an order
//@access Public
router.post("/", (req, res) => {
    
    let now = new Date();
    const newSaleHistory = new SaleHistory({
      imageID: req.body.imageID,
      name: req.body.name,
      price: req.body.price,
      originalImage: req.body.originalImage,
      category: req.body.category,
      seller: req.body.seller,
      orderDate: date.format(now, 'YYYY/MM/DD HH:mm:ss [GMT]Z')
     
    });
    newSaleHistory.save().then(saleHistory => res.json(saleHistory));
  });



//@route GET api/saleHistory
//@desc GET an saleHistory by seller ID
//@access Public

router.get("/seller/:seller", (req, res) => {
    const errors = {};
    SaleHistory.find({seller: req.params.seller})
        .then(saleHs => {
            if (isEmpty(saleHs)) {
                errors.nosale = 'You do not have any image that is purchased'
                return res.status(404).json(errors);
            }
            res.json(saleHs)
        })
        .catch(err => res.status(404).json({saleHs: 'You do not have any image that is purchased'}))
})

module.exports = router;