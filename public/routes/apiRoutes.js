var router = require("express").Router();
var connection = require("../db/connection");

router.get("/api/home", function(req, res) {
  connection.query("SELECT * FROM *", function(err, result) {
    if (err) throw err;

    res.json(result);
  });
});

router.get("/api/fanposts", function(req, res) {
  db.fanposts.findAll({}).then(function(fanposts) {
    res.json(fanposts);
  });
});

app.get("/api/fanposts/:id", function(req, res) {
 
  db.fanposts.findOne({
    where: {
      id: req.params.id
    }
  }).then(function(fanposts) {
    res.json(fanposts);
  });
});


router.post("/api/fanposts", function(req, res) {
  connection.query("INSERT INTO posts SET ?", [req.body], function(err, result) {
    if (err) throw err;

    res.json(result);
  });
});

router.get("/api/fanchat", function(req, res) {
  db.fanchat.findAll({}).then(function(fanchat) {
    res.json(fanchat);
  });
});

router.post("/api/fanchat", function(req, res) {
  connection.query("INSERT INTO fanChat SET ?", [req.body], function(err, result) {
    if (err) throw err;

    res.json(result);
  });
});

router.get("/api/teampage", function(req, res) {
  connection.query("SELECT * FROM *", function(err, result) {
    if (err) throw err;

    res.json(result);
  });
});

module.exports = router;