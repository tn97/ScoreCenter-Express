const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('4064b95643d24a48a9b28a7ad95f81e4');
const fs = require('fs');
var MySportsFeeds = require("mysportsfeeds-node");
var msf = new MySportsFeeds("2.0", true);
// msf.authenticate("3c05ee98-ad49-4e16-b24e-46c9b5", "MYSPORTSFEEDS");
// var data = msf.getData('nfl', '2018-2019-regular', 'players', 'json', {team: "NYJ", rosterstatus: "assigned-to-roster", position: "qb"});
// var data = msf.getData('nfl', '2018-2019-regular', 'weekly_games', 'json', {week: "12", sort: "game.starttime", rosterstatus: "assigned-to-roster", force: "true"});


const express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "./public")));


app.get("/team/:team", function (req, res) {
  res.sendFile(path.join(__dirname, "./public/team.html"));
  // res.sendFile(path.join(__dirname, "./public/css/team.style.css"));
});

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "./public/login.html"));
});

app.get("/login", function (req, res) {
  res.sendFile(path.join(__dirname, "./public/login.html"));
});

app.get("/signup", function (req, res) {
  res.sendFile(path.join(__dirname, "./public/signup.html"));
});


app.get("/home", function (req, res) {
  res.sendFile(path.join(__dirname, "./public/home.html"));
});

app.get("/fanchat", function (req, res) {
  res.sendFile(path.join(__dirname, "./public/fanchat.html"));
});

app.get("/fanposts", function (req, res) {
  res.sendFile(path.join(__dirname, "./public/fanposts.html"));
});


// Reads the file that gets created with the data called from the API
// fs.readFile('results/players-nfl-2018-2019-regular.json', 'utf8', function (err, data) {
//   if (err) throw err;
//   JSON.parse(data, null, 2).players.forEach((player, i) => {
//     const playerData = [player.player.jerseyNumber, player.player.firstName, player.player.lastName, player.player.primaryPosition, player.player.height, player.player.weight, player.player.age];
//     playerData.forEach(player => console.log(isNullOrZero(player)));
//   })
// });




// fs.readFile('results/weekly_games-nfl-2018-2019-regular.json', 'utf8', function (err, data) {
//   if (err) throw err;
//   JSON.parse(data, null, 2).games.forEach((game, i) => {
//     const gameData = [game.schedule.week];
//     gameData.forEach(game => console.log(isNullOrZero(game)));
//   })
// });


app.get("/api/news/:team", function (req, res) {
console.log(req.params.team)
  const teamName = (req.params.team.split(" ")[1]);

  // Team News API Call
  newsapi.v2.everything({
    q: req.params.team,
    // q: 'philadelphia eagles',
    pageSize: 50,
    sortBy: 'publishedAt',
    language: 'en'
  }).then((response, err) => {
    if (err) throw err;

    

    
    
    res.json(response)

  })
})



  // NFL News API Call
  // newsapi.v2.everything({
  //   sources: "nfl-news",
  //   sortBy: 'publishedAt',
  //   pageSize: 7,
  //   language: 'en'
  // }).then((response, err) => {
  //   if (err) throw err;

  //   response.articles.forEach(article => {
  //     const nflArticleData = [article.source.name, article.publishedAt, article.url, article.urlToImage, article.title, article.description]
  //     nflArticleData.forEach(article => console.log(article))
  //   })
  // });


// Function to replace data in Roster Chart not put in by API with a '*'. Will have a note on the site for this
function isNullOrZero(data) {
  return (data === null || data === 0) ? ('*') : (data);
}

app.listen(PORT, function () {
  console.log("App listening on PORT: " + PORT);
});
