
//variable for url to get team name
const url = location.href.split("/");
const team = url[url.length - 1]
const teamData = {
  cardinals: {
    primary: "#97233F",
    secondary: "#000000",
    city: "arizona",
    name: "cardinals",
    abbr: "ARI"
  },

  falcons: {
    primary: "#A71930",
    secondary: "#000000",
    city: "atlanta",
    name: "falcons",
    abbr: "ATL"
  },

  ravens: {
    primary: "#241773",
    secondary: "#000000",
    city: "baltimore",
    name: "ravens",
    abbr: "BAL"
  },

  bills: {
    primary: "#00338D",
    secondary: "#C60C30",
    city: "buffalo",
    name: "bills",
    abbr: "BUF"
  },

  panthers: {
    primary: "#0085CA",
    secondary: "#101820",
    city: "carolina",
    name: "panthers",
    abbr: "CAR"
  },

  bears: {
    primary: "#0B162A",
    secondary: "#C83803",
    city: "chicago",
    name: "bears",
    abbr: "CHI"
  },

  bengals: {
    primary: "#FB4F14",
    secondary: "#000000",
    city: "cincinnati",
    name: "bengals",
    abbr: "CIN"
  },

  browns: {
    primary: "#311D00",
    secondary: "#FF3C00",
    city: "cleveland",
    name: "browns",
    abbr: "CLE"
  },

  cowboys: {
    primary: "#003594",
    secondary: "#041E42",
    city: "dallas",
    name: "cowboys",
    abbr: "DAL"
  },

  broncos: {
    primary: "#FB4F14",
    secondary: "#002244",
    city: "denver",
    name: "broncos",
    abbr: "DEN"
  },

  lions: {
    primary: "#0076B6",
    secondary: "#B0B7BC",
    city: "detroit",
    name: "lions",
    abbr: "DET"
  },

  packers: {
    primary: "#203731",
    secondary: "#FFB612",
    city: "green bay",
    name: "packers",
    abbr: "GB"
  },

  texans: {
    primary: "#03202F",
    secondary: "#A71930",
    city: "houston",
    name: "texans",
    abbr: "HOU"
  },

  colts: {
    primary: "#002C5F",
    secondary: "#A2AAAD",
    city: "indianapolis",
    name: "colts",
    abbr: "IND"
  },

  jaguars: {
    primary: "#101820",
    secondary: "#D7A22A",
    city: "jacksonville",
    name: "jaguars",
    abbr: "JAX"
  },

  chiefs: {
    primary: "#E31837",
    secondary: "#FFB81C",
    city: "kansas city",
    name: "chiefs",
    abbr: "KC"
  },

  chargers: {
    primary: "#002A5E",
    secondary: "#FFC20E",
    city: "los angeles",
    name: "chargers",
    abbr: "LAC"
  },

  rams: {
    primary: "#002244",
    secondary: "#866D4B",
    city: "los angeles",
    name: "rams",
    abbr: "LA"
  },

  dolphins: {
    primary: "#008E97",
    secondary: "#F26A24",
    city: "miami",
    name: "dolphins",
    abbr: "MIA"
  },

  vikings: {
    primary: "#4F2683",
    secondary: "#FFC62F",
    city: "minnesota",
    name: "vikings",
    abbr: "MIN"
  },

  patriots: {
    primary: "#002244",
    secondary: "#C60C30",
    city: "new england",
    name: "patriots",
    abbr: "NE"
  },

  saints: {
    primary: "#D3BC8D",
    secondary: "#101820",
    city: "new orleans",
    name: "saints",
    abbr: "NO"
  },

  giants: {
    primary: "#0B2265",
    secondary: "#A71930",
    city: "new york",
    name: "giants",
    abbr: "NYG"
  },

  jets: {
    primary: "#003F2D",
    secondary: "#FFFFFF",
    city: "new york",
    name: "jets",
    abbr: "NYJ"
  },

  raiders: {
    primary: "#000000",
    secondary: "#A5ACAF",
    city: "oakland",
    name: "raiders",
    abbr: "OAK"
  },

  eagles: {
    primary: "#004C54",
    secondary: "#A5ACAF",
    city: "philadelphia",
    name: "eagles",
    abbr: "PHI"
  },

  steelers: {
    primary: "#FFB612",
    secondary: "#101820",
    city: "pittsburgh",
    name: "steelers",
    abbr: "PIT"
  },

  niners: {
    primary: "#AA0000",
    secondary: "#B3995D",
    city: "san francisco",
    name: "49ers",
    abbr: "SF"
  },

  seahawks: {
    primary: "#002244",
    secondary: "#69BE28",
    city: "seattle",
    name: "seahawks",
    abbr: "SEA"
  },

  buccaneers: {
    primary: "#D50A0A",
    secondary: "#FF7900",
    city: "tampa bay",
    name: "buccaneers",
    abbr: "TB"
  },

  titans: {
    primary: "#002A5C",
    secondary: "#4495D1",
    city: "tennessee",
    name: "titans",
    abbr: "TEN"
  },

  redskins: {
    primary: "#773141",
    secondary: "#FFB612",
    city: "washington",
    name: "redskins",
    abbr: "WAS"
  }
}

// const setTeamPage = () => {


//   //variable for the root class set for CSS Variables
//   const root = document.querySelector(':root');

//   //assign and set primary and secondary colors from teamData object based on team
//   const $primaryColor = teamData[team].primary;
//   const $secondaryColor = teamData[team].secondary;
//   root.style.setProperty('--primary-color', $primaryColor)
//   root.style.setProperty('--secondary-color', $secondaryColor)

//   //changing image based on team
//   const $jumboImage = `/photos/$${team}.png`
//   $(".jumbo-image").attr("src", $jumboImage);

//   $("#teamCity").text(teamData[team].city.toUpperCase())
//   $("#teamName").text(teamData[team].name.toUpperCase())
// }


// setTeamPage();


// const setTeamNews = () => {

//   const teamName = teamData[team].city + " " + teamData[team].name;
//   $.ajax({
//     url: "/api/news/" + teamName,
//     method: "GET"
//   }).then(function (data) {

//     // console.log(data.articles)

//    data.articles.forEach(article => {
//       // console.log(article)
//     })

//     const teamProper = team.charAt(0).toUpperCase() + team.slice(1);

//     const filteredArticles = data.articles.filter(article => {
//       // return article.title.includes(teamProper) && article.urlToImage && article.source.id !== "bleacher-report" && article.source.id !== "usa-today";
//       // return article.description.includes(teamProper) && article.source.name !== "Nownews.com" && article.source.name !== "USA Today";
//       return (article.description.includes(teamProper) || article.title.includes(teamProper)) && article.urlToImage && article.source.name !== "Nownews.com";
//     })

//     console.log(filteredArticles)

//     const teamNewsArray = [];

//     filteredArticles.forEach((article) => {

//         teamNewsArray.push(
//           {
//             "title": article.title,
//             "url": article.url,
//             "urlToImage": article.urlToImage,
//             "source": article.source.name,
//             "description": article.description
//           });
//         })





//     // console.log(teamNewsArray)



//     for (let x = 0; x < $(".article-pic-left").length; x++) {
//       $(".text")[x].innerText = teamNewsArray[x].title;
//       $(".article-pic-left")[x].src = teamNewsArray[x].urlToImage;
//     }

//     $(".article-pic-left").on("error", function() {
//       $(this).attr('src', `/photos/$${team}.png`);
//     });




//   })


// }

// setTeamNews();


const setRoster = () => {

  const teamAbbr = teamData[team].abbr;

  $.ajax({
    url: "/api/roster/" + teamAbbr,
    method: "GET"
  }).then(function (data) {
    // console.log(data)
    data.forEach(player => {
      let $tableRow = $("<tr>");
      let $jerseyNumber = $("<td>").text(player.jerseyNumber);
      let $firstName = $("<td>").text(player.firstName);
      let $lastName = $("<td>").text(player.lastName);
      let $primaryPosition = $("<td>").text(player.primaryPosition);
      let $height = $("<td>").text(player.height);
      let $weight = $("<td>").text(player.weight);
      let $age = $("<td>").text(player.age);

      $tableRow.append($jerseyNumber, $firstName, $lastName, $primaryPosition, $height, $weight, $age)
      $("#player-table").append($tableRow)
      console.log($tableRow)
    })




  })
}

setRoster();