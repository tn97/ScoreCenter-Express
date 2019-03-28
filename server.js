const PORT = process.env.PORT || 3000;
const db = require("./models");
const express = require("express");
const path = require("path");
const app = express();
const session = require("express-session");
const passport = require("./config/passport");
const fs = require("fs");
const $ = require('jquery');

const NewsApi = require('newsapi');
const newsapi = new NewsApi("4064b95643d24a48a9b28a7ad95f81e4");

const MySportsFeeds = require("mysportsfeeds-node");
const msf = new MySportsFeeds("2.0", true);
msf.authenticate("3c05ee98-ad49-4e16-b24e-46c9b5", "MYSPORTSFEEDS");
var data = msf.getData('nfl', '2018-2019-regular', 'players', 'json', { sort: "player.position", rosterstatus: 'assigned-to-roster', force: "true" });
var data = msf.getData('nfl', '2018-2019-regular', 'weekly_games', 'json', { week: "14", sort: "game.starttime", rosterstatus: "assigned-to-roster", force: "true" });
var data = msf.getData('nfl', '2018-2019-regular', 'seasonal_standings', 'json', { force: "true" });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "./public")));

app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());





app.get("/team/:team", function (req, res) {
  res.sendFile(path.join(__dirname, "./public/team.html"));
});

app.get("/api/news/:team", function (req, res) {

  ("********************************************************************************************************************************************************************************************************************************************************************************")
  if (req.params.team === "all") {
    console.log("REALLY?!")
    newsapi.v2.topHeadlines({
      sources: "nfl-news",
      sortBy: 'popularity',
      pageSize: 100,
      language: 'en'
    }).then((response, err) => {
      if (err) throw err;
      ("********************************************************************************************************************************************************************************************************************************************************************************")
      res.json(response)
    });
  } else {
    newsapi.v2.everything({
      q: req.params.team,
      pageSize: 100,
      sortBy: 'relevance',
      language: 'en'
    }).then((response, err) => {
      console.log("********************************************************************************************************************************************************************************************************************************************************************************")

      if (err) throw err;
      res.json(response)
    });
  }
})

app.get("/api/divisions", function (req, res) {
  console.log("***********************")
  fs.readFile('results/seasonal_standings-nfl-2018-2019-regular.json', 'utf8', function (err, data) {

    if (err) throw err;
    const filteredData = JSON.parse(data, null, 2);

    const standingsArray = [];

    filteredData.teams.forEach(squad => {
      standingsArray.push({
        "name": (squad.team.name === "49ers") ? (squad.team.name = "Niners") : (squad.team.name),
        "wins": squad.stats.standings.wins,
        "losses": squad.stats.standings.losses,
        "ties": squad.stats.standings.ties,
        "divisionName": squad.divisionRank.divisionName,
        "divisionRank": squad.divisionRank.rank,
      })
    })
    res.json(standingsArray);

  });
})

app.get("/api/matchups", function (req, res) {
  fs.readFile('results/weekly_games-nfl-2018-2019-regular.json', 'utf8', function (err, data) {
    if (err) throw err;
    const filteredData = JSON.parse(data, null, 2);
    const matchupArray = [];
    filteredData.games.forEach(matchup => {
      matchupArray.push(
        {
          "awayScore": matchup.score.awayScoreTotal,
          "homeScore": matchup.score.homeScoreTotal,
          "currentWeek": matchup.schedule.week,
          "startTime": matchup.schedule.startTime,
          "homeTeam": matchup.schedule.homeTeam.abbreviation,
          "awayTeam": matchup.schedule.awayTeam.abbreviation,
        }
      );
    })

    res.json(matchupArray);

  });



});

app.get("/api/roster/:team", function (req, res) {
  fs.readFile('results/players-nfl-2018-2019-regular.json', 'utf8', function (err, data) {
    if (err) throw err;

    const filteredData = JSON.parse(data, null, 2).players.filter(athlete => {

      return (athlete.player.currentTeam != null) && (athlete.player.currentTeam.abbreviation === req.params.team);

    });

    const playerArray = [];
    filteredData.forEach(athlete => {

      playerArray.push(
        {
          "jerseyNumber": athlete.player.jerseyNumber,
          "firstName": athlete.player.firstName,
          "lastName": athlete.player.lastName,
          "primaryPosition": athlete.player.primaryPosition,
          "height": athlete.player.height,
          "weight": athlete.player.weight,
          "age": athlete.player.age
        }
      );

    });

    const nulledArray = replaceNull(playerArray);

    res.json(nulledArray);

  })
})

app.use("/api", require("./routes/apiRoutes.js"));
app.use(require("./routes/htmlRoutes.js"));

// Function to replace data in Roster Chart not put in by API with a '*'. Will have a note on the site for this
function replaceNull(data) {
  data.forEach(obj => {
    for (let key in obj) {
      (obj[key] === null) ? (obj[key] = '*') : (false);
    }
  })
  return data;
}

users = [];
connections = [];

app.use(express.static("public"));

app.get('/fanchat', function (req, res) {
  res.sendFile(path.join(__dirname, './public/fanchat.html'));
});
var server = require("http").createServer(app);
var io = require("socket.io").listen(server);
io.sockets.on('connection', function (socket) {
  connections.push(socket);
  // console.log('Connected: %s sockets connected', connections.length);

  // Disconnect
  socket.on('disconnect', function (data) {
    users.splice(users.indexOf(socket.username), 1);
    updateUsernames();
    connections.splice(connections.indexOf(socket), 1);
    // console.log('Disconnected: %s sockets connected', connections.length);
  });

  // Send message
  socket.on('send message', function (data) {
    io.sockets.emit('new message', { msg: data, user: socket.username });
  });

  // New User
  socket.on('new user', function (data, callback) {
    callback(true);
    socket.username = data;
    users.push(socket.username);
    updateUsernames();
  });

  function updateUsernames() {
    io.sockets.emit('get users', users);
  }
});

db.sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT);
  });
});

