var router = require("express").Router();
var path = require("path");

// Render home.html at the "/nflHome" path
router.get("/home", function(req, res) {
  res.sendFile(path.join(__dirname, "../home.html"));
});

// Render fanPosts.html at the "/fanPosts" path
router.get("/fanposts", function(req, res) {
  res.sendFile(path.join(__dirname, "../fanposts.html"));
});

// Render fanChat.html at the "//fanChat" path
router.get("/fanchat", function(req, res) {
  res.sendFile(path.join(__dirname, "../fanchat.html"));
});

// Render team.html at the "/TeamPage" path
router.get("/teampage", function(req, res) {
  res.sendFile(path.join(__dirname, "../team.html"));
});

// All other paths serve the home.html page
router.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/404.html"));
});


module.exports = router;
