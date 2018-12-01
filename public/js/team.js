
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

const teamNames = {};

for (let team in teamData) {
  for (let property in teamData[team]) {
   abbreviation = teamData[team].abbr;
   teamNames[abbreviation] = {
    full: titleCase(teamData[team].city + " " + teamData[team].name),
    part: teamData[team].name
   }
 }
}

// $(document).ready(function () {
//   $('#roster-table').DataTable();
// });

const setTeamPage = () => {

  $("#team-headline").text(team)

  //variable for the root class set for CSS Variables
  const root = document.querySelector(':root');

  //assign and set primary and secondary colors from teamData object based on team
  const $primaryColor = teamData[team].primary;
  const $secondaryColor = teamData[team].secondary;
  root.style.setProperty('--primary-color', $primaryColor)
  root.style.setProperty('--secondary-color', $secondaryColor)

  //changing image based on team
  const $jumboImage = `/photos/$${team}.png`
  $(".jumbo-image").attr("src", $jumboImage);

  $("#teamCity").text(teamData[team].city.toUpperCase())
  $("#teamName").text(teamData[team].name.toUpperCase())



}


setTeamPage();


const setTeamNews = () => {

  const teamName = teamData[team].city + " " + teamData[team].name;
  // console.log(teamData[team].name)
  $.ajax({
    url: "/api/news/" + teamName,
    method: "GET"
  }).then(function (data) {
    
    // console.log(data.articles)
    
    

    // const teamProper = teamName.split(" ")[1].charAt(0).toUpperCase() + teamName.split(" ")[1].slice(1)

    // console.log(teamProper)
    // const filteredArticles = data.articles.filter(article => {
      // return article.title.includes(teamProper) && article.urlToImage && article.source.id !== "bleacher-report" && article.source.id !== "usa-today";
      // return article.description.includes(teamProper) && article.source.name !== "Nownews.com" && article.source.name !== "USA Today";
      // return (article.description.includes(teamProper) || article.title.includes(teamProper)) && article.urlToImage;
      // return article.urlToImage;
      // return article.title.includes(teamProper) && article.urlToImage;
    // })

    // console.log(filteredArticles)

    const teamNewsArray = [];

    data.articles.forEach((article) => {

        teamNewsArray.push(
          {
            "title": article.title,
            "url": article.url,
            "urlToImage": article.urlToImage,
            "source": article.source.name,
            "description": article.description
          });
        })





    // console.log(teamNewsArray)



    for (let x = 0; x < $(".article-pic-left").length; x++) {
      $(".text")[x].innerText = teamNewsArray[x].title;
      $(".article-pic-left")[x].src = teamNewsArray[x].urlToImage;
    }

    $(".article-pic-left").on("error", function() {
      $(this).attr('src', `/photos/$${team}.png`);
    });




  })


}

setTeamNews();




const setRoster = () => {
  const teamAbbr = teamData[team].abbr;
  $.ajax({
        url: "/api/roster/" + teamAbbr,
        method: "GET"
      }).then(function (data) {
    // console.log(data)
    data.forEach(player => {
      const $tableRow = $("<tr>");
      const $jerseyNumber = $("<td>").text(player.jerseyNumber);
      const $firstName = $("<td>").text(player.firstName);
      const $lastName = $("<td>").text(player.lastName);
      const $primaryPosition = $("<td>").text(player.primaryPosition);
      const $height = $("<td>").text(player.height);
      const $weight = $("<td>").text(player.weight);
      const $age = $("<td>").text(player.age);

      $tableRow.append($jerseyNumber, $firstName, $lastName, $primaryPosition, $height, $weight, $age)

      // $("tbody > tr").empty();
      $("#roster-table > tbody").append($tableRow)

    })




  })
}


const setRecords = () => {
  $.ajax({
   method: "GET",
   url: "/api/divisions"
  }).then((data) => {
   // console.log(data)
 
   data.forEach(team => {
    // console.log(data)
    let teamRef = team.name.toLowerCase();
    teamData[teamRef]["record"] = `${team.wins} - ${team.losses} - ${team.ties}`;
   })
 
  })
 }

const setMatchups = () => {





  $.ajax({
   url: "/api/matchups",
   method: "GET"
  }).then(function (data) {

   // console.log(data);
   const teamAbbr = teamData[team].abbr;

   const filteredData = data.filter(matchup => {
     
     return matchup.awayTeam === teamAbbr || matchup.homeTeam === teamAbbr
    })
    console.log(filteredData)

    const homeAbbr = filteredData[0].homeTeam;
    const awayAbbr = filteredData[0].awayTeam;

    
    if (filteredData[0].awayScore === null || filteredData[0].homeScore === null) {
      filteredData[0].awayScore = 0;
      filteredData[0].homeScore = 0;
    }
    
    console.log(filteredData[0].homeScore)

   const homeTeamName = abbrToName(filteredData[0].homeTeam).split(" ")[1].toLowerCase();
   const awayTeamName = abbrToName(filteredData[0].awayTeam).split(" ")[1].toLowerCase();


  //  console.log(homeTeamName)
 
   const $homeTeam = titleCase(abbrToName(filteredData[0].homeTeam))
    const $awayTeam = titleCase(abbrToName(filteredData[0].awayTeam))

console.log(teamData[teamNames[awayAbbr].part]["record"])


    let $matchup = `        
    <div class="matchup-row">
    <div class="awayTeam">
      <div class="record mb-2">
        <p class="text-center" id="record">${teamData[teamNames[awayAbbr].part]["record"]}</p>
      </div>
      <div class="team mb-2">
        <div class="team-logo mx-auto">
          <img class="matchup-logo" src="/photos/${awayTeamName}.gif">
        </div>
      </div>
      <div class="teamName mb-1">
          <p class="text-center" id="team-name">${$awayTeam}</p>
      </div>
      <div class="score">
        <p class="text-center score" id=score>${filteredData[0].awayScore}</p>
      </div>
    </div>
    <div class="at">at</div>

    
    <div class="homeTeam">
      <div class="record mb-2">
        <p class="text-center" id="record">${teamData[teamNames[homeAbbr].part]["record"]}</p>
      </div>
      <div class="team mb-2">
        <div class="team-logo mx-auto">
          <img class="matchup-logo" src="/photos/${homeTeamName}.gif">
        </div>
      </div>
      <div class="teamName mb-1">
          <p class="text-center" id="team-name">${$homeTeam}</p>
      </div>
      <div class="score">
        <p class="text-center score" id=score>${filteredData[0].homeScore}</p>
      </div>
    </div>




    

  </div>`
 

  $(".matchup-div").append($matchup);
    // console.log(moment(matchup.startTime).format("h:mm"))
 
    // if (moment(matchup.startTime).format("dddd") === "Thursday") {
    //  $("#tnf").append($matchup);
    // } else if (moment(matchup.startTime).format("dddd") === "Monday") {
    //  $("#mnf").append($matchup);
    // } else if (moment(matchup.startTime).format("h:mm") === "1:00") {
    //  $("#afternoon-games").append($matchup)
    // } else if (moment(matchup.startTime).format("h:mm") === "4:05" || moment(matchup.startTime).format("h:mm") === "4:25") {
    //  $("#late-afternoon-games").append($matchup)
    // } else {
    //  $("#snf").append($matchup)
    // }
 
 
 
    // if (moment(matchup.startTime).format("MM/DD/YYYY h:mma")) {
 
 
    //   break;
    // }
    // console.log(moment(matchup.startTime).format("dddd"))
    // if thursday,  $("#tnf").append($matchup)
    // if 1:00 starts,    $("#tnf").append($matchup)
    //if 4:05 or 4:25
    // else
 
    // $("#afternoon-games").append($matchup)
    // $("#late-afternoon-games").append($matchup)
    // $("#snf").append($matchup)
    // $("#mnf").append($matchup)
 
 
 
 
  //  })
 
   // const start = moment(matchup.startTime).format("MM/DD/YYYY h:mma");
   // console.log(start)
  })
 }





 function abbrToName(abbr) {

  for (let team in teamData) {
    for (let property in teamData[team]) {
      // console.log(teamData[team][property])
     if (teamData[team][property] === abbr) {
      abbreviation = teamData[team].abbr;

      teamNames[abbreviation] = {
        full: titleCase(teamData[team].city + " " + teamData[team].name),
        part: teamData[team].name
       }
      return (`${teamData[team].city} ${teamData[team].name}`);
     }
    }
   }
 }



 function titleCase(str) {
  str = str.toLowerCase().split(' ');
  for (var i = 0; i < str.length; i++) {
   str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return( str.join(' ')); 
 }




 setRecords();
 setMatchups();
 setRoster();