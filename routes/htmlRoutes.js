var router = require("express").Router();
var path = require("path");
// Requiring path to so we can use relative routes to our HTML files


// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");



router.get("/", function (req, res) {
  // If the user already has an account send them to the members page
  if (req.user) {
    return res.redirect("/home");
  }
  res.sendFile(path.join(__dirname, "../public/login.html"));
});

router.get("/signup", function (req, res) {
  // If the user already has an account send them to the members page
  if (req.user) {
    return res.redirect("/home");
  }
  res.sendFile(path.join(__dirname, "../public/signup.html"));
});

// Here we've add our isAuthenticated middleware to this route. If a user who is
// not logged in tries to access this route they will be redirected to the
// signup page
router.get("/home", isAuthenticated, function (req, res) {
  res.sendFile(path.join(__dirname, "../public/home.html"));
});

router.get("/fanchat", isAuthenticated, function (req, res) {
  res.sendFile(path.join(__dirname, "../public/fanchat.html"));
});

router.get("/fanpost", isAuthenticated, function (req, res) {
  res.sendFile(path.join(__dirname, "../public/fanpost.html"));
});

router.get("/login", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/login.html"));
});

// Render .html at the "/signup" path
router.get("/signup", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/signup.html"));
});



// Render .html at the "/login" path
router.get("/fanchat", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/fanchat.html"));
});

router.get("/fanposts", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/fanposts.html"));
});

router.get("/team", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/team.html"));
});

router.get("/home", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/home.html"));
});





// All other paths serve the home.html page
router.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/home.html"));
});



module.exports = router;
