const router = require("express").Router();
require("dotenv").config();
var express = require('express');




// Requiring our models and passport as we've configured it
const db = require("../models");
const passport = require("../config/passport");

// Using the passport.authenticate middleware with our local strategy. If the
// user has valid login credentials, send them to the members page. Otherwise
// the user will be sent an error
router.post("/login", passport.authenticate("local"), function (req, res) {
  // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request So we're sending the user back the route to the members page because the redirect will happen on the front end They won't get this or even be able to access this page if they aren't authorized
console.log(req.user)
  res.json(req.user);
  // res.json("/home");
});

/* Route for signing up a user and logging them in. */
router.post("/signup", function (req, res) {

  db
    .User
    .create({username: req.body.username, password: req.body.password, team: req.body.team})
    .then(function (userInfo) {
      // Upon successful signup, log user in
      req
        .login(userInfo, function (err) {
          if (err) {
            console.log(err)
            return res
              .status(422)
              .json(err);
          }
          console.log(req.user);
          return res.json("/home");
        });
    })
    .catch(function (err) {
      console.log(err);
      res
        .status(422)
        .json(err);
    });

});

// Route for getting some data about our user to be used client side
router.get("/user_data", function (req, res) {
  if (!req.user) {
    // The user is not logged in, send back an empty object
    res.json({});
  } else {
    // Otherwise send back the user's username and id Sending back a password, even a
    // hashed password, isn't a good idea
    res.json({username: req.user.username, id: req.user.id, photo: req.user.photo});
  }
});


// ------------------------------------------------------------------------



module.exports = router;