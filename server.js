const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('4064b95643d24a48a9b28a7ad95f81e4');
const fs = require('fs');
// var MySportsFeeds = require("mysportsfeeds-node");
// var msf = new MySportsFeeds("2.0", true);
// msf.authenticate("3c05ee98-ad49-4e16-b24e-46c9b5", "MYSPORTSFEEDS");
// var data = msf.getData('nfl', '2018-2019-regular', 'players', 'json', {team: "NYJ", rosterstatus: "assigned-to-roster", position: "qb"});

// Reads the file that gets created with the data called from the API
fs.readFile('results/players-nfl-2018-2019-regular.json', 'utf8', function (err, data) {
  if (err) throw err;
  JSON.parse(data, null, 2).players.forEach((player, i) => {
    const playerData = [player.player.jerseyNumber, player.player.firstName, player.player.lastName, player.player.primaryPosition, player.player.height, player.player.weight, player.player.age];
    playerData.forEach(player => console.log(isNullOrZero(player)));
  })
});

// NFL News API Call
newsapi.v2.everything({
  q: 'philadelphia eagles',
  pageSize: 20,
  sortBy: 'publishedAt',
  language: 'en'
}).then((response, err) => {
  if (err) throw err;

  response.articles.forEach(article => {
    const articleData = [article.title, article.url, article.urlToImage];
    if (article.title.includes("Eagles")) {
      articleData.forEach(article => console.log(article))
    }
  });
})

// Team News API Call
newsapi.v2.everything({
  sources: "nfl-news",
  sortBy: 'publishedAt',
  pageSize: 7,
  language: 'en'
}).then((response, err) => {
  if (err) throw err;

  response.articles.forEach(article => {
    const nflArticleData = [article.source.name, article.publishedAt, article.url, article.urlToImage, article.title, article.description]
    nflArticleData.forEach(article => console.log(article))
  })
});

// Function to replace data in Roster Chart not put in by API with a '*'. Will have a note on the site for this
function isNullOrZero(data) {
  return (data === null || data === 0) ? ('*') : (data);
}