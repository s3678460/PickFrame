const express = require("express")
const router = express.Router();
const fs = require("fs")
const path = require("path")
const multer = require("multer");
const passport = require("passport")
const validateImageInput = require("../../validation/image")
const isEmty = require("../../validation/is-empty")

//Load Image model
const Image = require("../../models/Image")


//Test API

router.get("/test", (req, res) => res.json({ msg: "Image works" }))

//@route GET api/userimage
//@desc GET Images of current user
//@access Private

router.get("/userimage", passport.authenticate('jwt', { session: false }), (req, res) => {
    const errors = {};
    Image.find({ user: req.user.id })
        .then(images => {
            if (isEmty(images)) {
                errors.noimage = 'You do not have any image that is selling'
                return res.status(404).json(errors);
            }
            res.json(images)
        })
        .catch(err => res.status(404).json(err))
})

//Set Storage Images
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../../client/public/storageimages'))
    },
    filename: function (req, file, cb) {
        // cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
        cb(null, file.originalname);
    }
});

// Init Upload
const upload = multer({
    storage: storage,
    fileFilter: function (req, file, cb) {
        checkFileType(file, cb);
    }
}).single('uploadimage');

//Check File Type Function
function checkFileType(file, cb) {
    //Allow ext
    const filetypes = /jpeg|jpg|png|gif/;
    //Check ext
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    //Check mime
    const mimetype = filetypes.test(file.mimetype);

    if (mimetype && extname) {
        return cb(null, true);
    }
    else {
        cb('Error: Images Only!')
    }

}



//Post Upload Image
router.post("/uploadimage", (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            console.log(err)
        }
        else {
            console.log(req.file.filename)
            res.send(req.file.filename)
        }
    })
});


//Post delete image
router.post("/deleteimage", (req, res) => {
    //delete local image
    var filepath = path.join(__dirname, `../../client/public/storageimages/${req.body.imageLink}`)
    fs.unlinkSync(filepath);
})



//@route GET api/images
//@desc GET ALL images
//@access Public

router.get("/all", (req, res) => {
    Image.find()
        .then(images => res.json(images))
})

//@route GET api/images/:keyword 
//@desc GET images by a keyword
//@access Public

router.get("/searchbykey/:keyword", (req, res) => {
    var regExp = new RegExp(req.params.keyword, 'i');
    Image.find({ name: regExp })
        .then(images => res.json(images))
})

//@route GET api/images/:category
//@desc GET images by a category
//@access Public

router.get("/searchbycate/:category", (req, res) => {
    var categorykey = req.params.category
    Image.find({ category: category })
        .then(images => res.json(images))
})


//@route POST api/image
//@desc Create an image
//@access Public

router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
    const { errors, isValid } = validateImageInput(req.body);

    //Check validation
    if (!isValid) {
        return res.status(404).json(errors)
    }
    const imageFields = {};
    //add image fields
    imageFields.imageID = req.body.imageID;
    imageFields.name = req.body.name;
    imageFields.price = req.body.price;
    imageFields.seller = req.body.seller;
    imageFields.size = {
        width: req.body.width,
        height: req.body.height
    };
    imageFields.uploadDate = req.body.uploadDate;
    imageFields.originalImage = req.body.originalImage;
    imageFields.watermarkImage = req.body.watermarkImage;
    imageFields.category = req.body.category.split(",");
    imageFields.user = req.user.id;

    Image.findOne({ imageID: req.body.imageID })
        .then(image => {
            if (image) {
                //update
                Image.findOneAndUpdate(
                    { imageID: req.body.imageID },
                    { $set: imageFields },
                    { new: true }
                )
                    .then(image => res.json(image))
                    .catch(err => res.status(404).json(err))
            } else {
                //create
                new Image(imageFields).save()
                    .then(image => res.json(image))
                    .catch(err => res.status(404).json(err))
            }
        })
})

//@route DELETE api/image
//@desc Delete an image
//@access Public

router.delete('/:_id', passport.authenticate('jwt', { session: false }), (req, res) => {
    Image.findByIdAndRemove(req.params._id)
        .then(removedImage => res.send(removedImage))
        .catch(err => res.status(404).json({ success: false }))
})


//@route UPDATE api/image
//@desc update an image
//@access Public

router.put('/:_id', (req, res) => {
    var update = req.body;
    Image.findByIdAndUpdate(req.params._id, update)
        .then(() => res.json({ update: true }))
        .catch(err => res.status(404).json({ update: false }))
})

//@route GET api/image
//@desc GET an image
//@access Public

router.get('/:_id', (req, res) => {
    Image.findById(req.params._id)
        .then(image => res.json(image))
        .catch(err => res.status(404).json({ get: false }))
})

module.exports = router;