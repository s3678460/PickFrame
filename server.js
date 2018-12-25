const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const path = require("path");

const images = require("./routes/api/Images");
const users = require("./routes/api/Users");
const admins = require("./routes/api/Admins");
const orders = require("./routes/api/Orders");
const contact = require("./routes/api/Contact");

const app = express();

var cors = require("cors");
app.use(cors());

//Bodyparser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());

//DB config
const db = require("./config/keys").mongoURI;

//Connect to  Mongo
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB Connected..."))
  .catch(err => console.log(err));

//Passport middleware
app.use(passport.initialize());

//Passport config
require("./config/passport")(passport);

//Use Routes
app.use("/api/images", images);
app.use("/api/users", users);
app.use("/api/admins", admins);
app.use("/api/orders", orders);
app.use("/api/contacts",contact);

//Serve static assets if in production

// app.use(express.static(path.join(__dirname, "client/build")));

// app.get("/*", function (req, res) {
//   res.sendFile(path.join(__dirname, "client", "build", "index.html"));
// });

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
