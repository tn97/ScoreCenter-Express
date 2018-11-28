var express = require("express");

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


app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});