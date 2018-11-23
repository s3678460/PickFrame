const express = require("express");
const router = express.Router();

//Order model
const Order = require("../../models/Order");

//@route GET api/orders
//@desc GET ALL orders
//@access Public

router.get("/", (req, res) => {
  Order.find().then(orders => res.json(orders));
});

//@route POST api/order
//@desc Create an order
//@access Public
const timestamp = require("time-stamp");

router.post("/", (req, res) => {
  const newOrder = new Order({
    companyName: req.body.companyName,
    address: req.body.address,
    companyPhone: req.body.companyPhone,
    accountHolder: req.body.accountHolder,
    cardNumber: req.body.cardNumber,
    bankName: req.body.bankName,
    bankBranch: req.body.bankBranch,
    email: req.body.email,
    productId: req.body.productId,
    total: req.body.total,
    status: req.body.status,
    date: timestamp("YYYY/MM/DD")
  });
  newOrder.save().then(order => res.json(order));
});

//@route DELETE api/order
//@desc Delete an order
//@access Public

router.delete("/:_id", (req, res) => {
  Order.findByIdAndRemove(req.params._id)
    .then(removedOrder => res.send(removedOrder))
    .catch(err => res.status(404).json({ success: false }));
});

//@route UPDATE api/order
//@desc update an order
//@access Public

router.put("/:_id", (req, res) => {
  var update = req.body;
  Order.findByIdAndUpdate(req.params._id, update)
    .then(() => res.json({ update: true }))
    .catch(err => res.status(404).json({ update: false }));
});

//@route GET api/order
//@desc GET an order
//@access Public

router.get("/:_id", (req, res) => {
  Order.findById(req.params._id)
    .then(order => res.json(order))
    .catch(err => res.status(404).json({ get: false }));
});

module.exports = router;
