var $ = require('jquery');
// var dt      = require( 'datatables.net' )();
// var buttons = require( 'datatables.net-buttons' )();
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('4064b95643d24a48a9b28a7ad95f81e4');
const fs = require('fs');
var MySportsFeeds = require("mysportsfeeds-node");
var msf = new MySportsFeeds("2.0", true);
msf.authenticate("3c05ee98-ad49-4e16-b24e-46c9b5", "MYSPORTSFEEDS");
// var data = msf.getData('nfl', '2018-2019-regular', 'players', 'json', {sort: "player.position"}, {rosterstatus: 'assigned-to-roster'});
// var data = msf.getData('nfl', '2018-2019-regular', 'weekly_games', 'json', { week: "13", sort: "game.starttime", rosterstatus: "assigned-to-roster", force: "true" });
var data = msf.getData('nfl', '2018-2019-regular', 'seasonal_standings', 'json', { force: "true" });

const express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;
var io = require("socket.io");
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

app.get("/api/news/:team", function (req, res) {

  if (req.params.team === "all") {
    newsapi.v2.topHeadlines({
      sources: "nfl-news",
      sortBy: 'popularity',
      pageSize: 100,
      language: 'en'
    }).then((response, err) => {
      if (err) throw err;
      res.json(response)
    });
  } else {
    newsapi.v2.everything({
      q: req.params.team,
      pageSize: 100,
      sortBy: 'relevance',
      language: 'en'
    }).then((response, err) => {
      if (err) throw err;
      res.json(response)
    });
  }
})











  app.get("/api/divisions", function (req, res) {

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


    //   .forEach((game, i) => {
    //     const gameData = [game.schedule.week];
    //     gameData.forEach(game => console.log(isNullOrZero(game)));
    //   })
    // });



  });

  app.get("/api/roster/:team", function (req, res) {

    console.log(req.params.team)

    // Reads the file that gets created with the data called from the API
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
  function replaceNull(data) {

    data.forEach(obj => {
      for (let key in obj) {
        (obj[key] === null) ? (obj[key] = '*') : (false);
      }
    })
    return data;
  }

  app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
  });




// NFL News API Call
// newsapi.v2.everything({
//   q: 'philadelphia eagles',
//   pageSize: 20,
//   sortBy: 'publishedAt',
//   language: 'en'
// }).then((response, err) => {
//   if (err) throw err;

//   response.articles.forEach(article => {
//     const articleData = [article.title, article.url, article.urlToImage];
//     if (article.title.includes("Eagles")) {
//       articleData.forEach(article => console.log(article))
//     }
//   });
// })

// // Team News API Call
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
