const express = require("express")
const router = express.Router();

//Image model
const Image = require("../../models/Image")


//@route GET api/images
//@desc GET ALL images
//@access Public

router.get("/", (req,res)=>{
    Image.find()
    .then(images => res.json(images))
})


//@route POST api/image
//@desc Create an image
//@access Public

router.post('/', (req,res)=>{
    const newImage = new Image({
        imageID: req.body.imageID,
        name: req.body.name,
        price: req.body.price,
        seller: req.body.seller,
        size: req.body.size,
        uploadDate: req.body.uploadDate,
        originalImage: req.body.originalImage,
        watermarkImage: req.body.watermarkImage,
        idSeller: req.body.idSeller
    })
    newImage.save().then(image => res.json(image))
})

//@route DELETE api/image
//@desc Delete an image
//@access Public

router.delete('/:_id', (req, res)=>{
    Image.findByIdAndRemove(req.params._id)
    .then(removedImage => res.send(removedImage))
    .catch(err => res.status(404).json({success: false}))
})


//@route UPDATE api/image
//@desc update an image
//@access Public

router.put('/:_id', (req, res)=>{
    var update = req.body;
    Image.findByIdAndUpdate(req.params._id, update)
    .then(()=> res.json({update: true}))
    .catch(err => res.status(404).json({update: false}))
})

//@route GET api/image
//@desc GET an image
//@access Public

router.get('/:_id', (req, res)=>{
    Image.findById(req.params._id)
    .then(image => res.json(image))
    .catch(err => res.status(404).json({get: false}))
})

module.exports = router;