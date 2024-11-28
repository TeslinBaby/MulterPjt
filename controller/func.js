const Name = require("../model/model");

// Render the home page with a list of users
const renderHome = (req, res) => {
  Name.find()
    .then((names) => {
      res.render("index", { names });
    })
    .catch((err) => {
      res.status(500).send("Error retrieving users: " + err.message);
    });
};

// Add a new user
const addUser = (req, res) => {
  newUser = new Name({
    name: req.body.name,
    file: req.file.filename,
  });
  newUser
    .save()
    .then((res) => res.redirect("/"))
    .catch((err) => {
      res.status(500).send("Error saving user: " + err.message);
    });
};


module.exports = { renderHome, addUser };