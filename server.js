var express = require("express");
var db = require(`./models`);
var passport = require("passport");
var Strategy = require("passport-local").Strategy;
var path = require("path");

var htmlRoutes = require("./routes/htmlRoutes");

// Tells node that we are creating an "express" server
var app = express();
// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Sets up route middleware
// Use the apiRoutes file for any apiRoutes
// Use the htmlRoutes file for all other routes

app.use(htmlRoutes);

app.use(passport.initialize());
app.use(passport.session());

passport.use(new Strategy(
  function (username, password, cb) {
    console.log(password, 'pass')
    db.User.findOne({
      where: {
        username: username
      }
    }).then(function(user) {
      if (!user) { return cb(null, false); }
      if (user.password != password) { return cb(null, false); }
      return cb(null, user);
    }).catch(function(err){
      if (err) { return cb(err); }
    })
  }));

passport.serializeUser(function (user, cb) {
  cb(null, user.id);
});

passport.deserializeUser(function (id, cb) {
  db.User.findById(id, function (err, user) {
    if (err) { return cb(err); }
    cb(null, user);
  });
});

// TESTING
app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '/public/home.html'))
})

app.post('/login', 
  passport.authenticate('local', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  });

app.post('/signup', function(req, res) {
  console.log(req.body);
  db.User.create({
    username: req.body.username,
    password: req.body.password,
    fav_Team: req.body.favTeam
  })
});

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
