var router = require("express").Router();
var path = require("path");

router.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/home.html"));
});

// Render .html at the "/signup" path
router.get("/signup", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/signup.html"));
});

// Render .html at the "/login" path
router.get("/login", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/login.html"));
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

// All other paths serve the home.html page
router.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/home.html"));
});

module.exports = router;
