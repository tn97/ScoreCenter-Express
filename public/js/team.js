const dataCheck = (teamKey, searchKey) => {
  teamData.forEach((team, i) => {
    if (searchKey === teamData[i].teamKey) {
      return true;
    }
  })
}

const titleCase = (str) => {
  str = str.toLowerCase().split(' ');
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(' ');
}

const currentTeamData = {}

const teamData = [
  {
    teamCity: "arizona",
    teamNameLower: "cardinals",
    teamPrimaryCSS: "#97233F",
    teamSecondaryCSS: "#000000",
    teamAbbr: "ARI",
    teamGametime: "",
    teamLogo: "",
    teamDivName: "",
    teamDivRank: "",
    teamIsHome: "",
    teamProperName: "",
    teamLowerFull: "",
    teamCurrentScore: "",
    teamMatchup: "",
    teamRecord: "",
    teamJumboPhoto: "",
  },
  {
    teamCity: "atlanta",
    teamNameLower: "falcons",
    teamPrimaryCSS: "#A71930",
    teamSecondaryCSS: "#000000",
    teamAbbr: "ATL",
    teamGametime: "",
    teamLogo: "",
    teamDivName: "",
    teamDivRank: "",
    teamIsHome: "",
    teamProperName: "",
    teamLowerFull: "",
    teamCurrentScore: "",
    teamMatchup: "",
    teamRecord: "",
    teamJumboPhoto: "",
  },
  {
    teamCity: "baltimore",
    teamNameLower: "ravens",
    teamPrimaryCSS: "#241773",
    teamSecondaryCSS: "#000000",
    teamAbbr: "BAL",
    teamGametime: "",
    teamLogo: "",
    teamDivName: "",
    teamDivRank: "",
    teamIsHome: "",
    teamProperName: "",
    teamLowerFull: "",
    teamCurrentScore: "",
    teamMatchup: "",
    teamRecord: "",
    teamJumboPhoto: "",
  },
  {
    teamCity: "buffalo",
    teamNameLower: "bills",
    teamPrimaryCSS: "#00338D",
    teamSecondaryCSS: "#C60C30",
    teamAbbr: "BUF",
    teamGametime: "",
    teamLogo: "",
    teamDivName: "",
    teamDivRank: "",
    teamIsHome: "",
    teamProperName: "",
    teamLowerFull: "",
    teamCurrentScore: "",
    teamMatchup: "",
    teamRecord: "",
    teamJumboPhoto: "",
  },
  {
    teamCity: "carolina",
    teamNameLower: "panthers",
    teamPrimaryCSS: "#0085CA",
    teamSecondaryCSS: "#101820",
    teamAbbr: "CAR",
    teamGametime: "",
    teamLogo: "",
    teamDivName: "",
    teamDivRank: "",
    teamIsHome: "",
    teamProperName: "",
    teamLowerFull: "",
    teamCurrentScore: "",
    teamMatchup: "",
    teamRecord: "",
    teamJumboPhoto: "",
  },
  {
    teamCity: "chicago",
    teamNameLower: "bears",
    teamPrimaryCSS: "#0B162A",
    teamSecondaryCSS: "#C83803",
    teamAbbr: "CHI",
    teamGametime: "",
    teamLogo: "",
    teamDivName: "",
    teamDivRank: "",
    teamIsHome: "",
    teamProperName: "",
    teamLowerFull: "",
    teamCurrentScore: "",
    teamMatchup: "",
    teamRecord: "",
    teamJumboPhoto: "",
  },
  {
    teamCity: "cincinnati",
    teamNameLower: "bengals",
    teamPrimaryCSS: "#FB4F14",
    teamSecondaryCSS: "#000000",
    teamAbbr: "CIN",
    teamGametime: "",
    teamLogo: "",
    teamDivName: "",
    teamDivRank: "",
    teamIsHome: "",
    teamProperName: "",
    teamLowerFull: "",
    teamCurrentScore: "",
    teamMatchup: "",
    teamRecord: "",
    teamJumboPhoto: "",
  },
  {
    teamCity: "cleveland",
    teamNameLower: "browns",
    teamPrimaryCSS: "#311D00",
    teamSecondaryCSS: "#FF3C00",
    teamAbbr: "CLE",
    teamGametime: "",
    teamLogo: "",
    teamDivName: "",
    teamDivRank: "",
    teamIsHome: "",
    teamProperName: "",
    teamLowerFull: "",
    teamCurrentScore: "",
    teamMatchup: "",
    teamRecord: "",
    teamJumboPhoto: "",
  },
  {
    teamCity: "dallas",
    teamNameLower: "cowboys",
    teamPrimaryCSS: "#003594",
    teamSecondaryCSS: "#041E42",
    teamAbbr: "DAL",
    teamGametime: "",
    teamLogo: "",
    teamDivName: "",
    teamDivRank: "",
    teamIsHome: "",
    teamProperName: "",
    teamLowerFull: "",
    teamCurrentScore: "",
    teamMatchup: "",
    teamRecord: "",
    teamJumboPhoto: "",
  },
  {
    teamCity: "denver",
    teamNameLower: "broncos",
    teamPrimaryCSS: "#FB4F14",
    teamSecondaryCSS: "#002244",
    teamAbbr: "DEN",
    teamGametime: "",
    teamLogo: "",
    teamDivName: "",
    teamDivRank: "",
    teamIsHome: "",
    teamProperName: "",
    teamLowerFull: "",
    teamCurrentScore: "",
    teamMatchup: "",
    teamRecord: "",
    teamJumboPhoto: "",
  },
  {
    teamCity: "detroit",
    teamNameLower: "lions",
    teamPrimaryCSS: "#0076B6",
    teamSecondaryCSS: "#B0B7BC",
    teamAbbr: "DET",
    teamGametime: "",
    teamLogo: "",
    teamDivName: "",
    teamDivRank: "",
    teamIsHome: "",
    teamProperName: "",
    teamLowerFull: "",
    teamCurrentScore: "",
    teamMatchup: "",
    teamRecord: "",
    teamJumboPhoto: "",
  }, {
    teamCity: "green bay",
    teamNameLower: "packers",
    teamPrimaryCSS: "#203731",
    teamSecondaryCSS: "#FFB612",
    teamAbbr: "GB",
    teamGametime: "",
    teamLogo: "",
    teamDivName: "",
    teamDivRank: "",
    teamIsHome: "",
    teamProperName: "",
    teamLowerFull: "",
    teamCurrentScore: "",
    teamMatchup: "",
    teamRecord: "",
    teamJumboPhoto: "",
  },
  {
    teamCity: "houston",
    teamNameLower: "texans",
    teamPrimaryCSS: "#03202F",
    teamSecondaryCSS: "#A71930",
    teamAbbr: "HOU",
    teamGametime: "",
    teamLogo: "",
    teamDivName: "",
    teamDivRank: "",
    teamIsHome: "",
    teamProperName: "",
    teamLowerFull: "",
    teamCurrentScore: "",
    teamMatchup: "",
    teamRecord: "",
    teamJumboPhoto: "",
  },
  {
    teamCity: "indianapolis",
    teamNameLower: "colts",
    teamPrimaryCSS: "#002C5F",
    teamSecondaryCSS: "#A2AAAD",
    teamAbbr: "IND",
    teamGametime: "",
    teamLogo: "",
    teamDivName: "",
    teamDivRank: "",
    teamIsHome: "",
    teamProperName: "",
    teamLowerFull: "",
    teamCurrentScore: "",
    teamMatchup: "",
    teamRecord: "",
    teamJumboPhoto: "",
  },
  {
    teamCity: "jacksonville",
    teamNameLower: "jaguars",
    teamPrimaryCSS: "#101820",
    teamSecondaryCSS: "#D7A22A",
    teamAbbr: "JAX",
    teamGametime: "",
    teamLogo: "",
    teamDivName: "",
    teamDivRank: "",
    teamIsHome: "",
    teamProperName: "",
    teamLowerFull: "",
    teamCurrentScore: "",
    teamMatchup: "",
    teamRecord: "",
    teamJumboPhoto: "",
  }, {

    teamCity: "kansas city",
    teamNameLower: "chiefs",
    teamPrimaryCSS: "#E31837",
    teamSecondaryCSS: "#FFB81C",
    teamAbbr: "KC",
    teamGametime: "",
    teamLogo: "",
    teamDivName: "",
    teamDivRank: "",
    teamIsHome: "",
    teamProperName: "",
    teamLowerFull: "",
    teamCurrentScore: "",
    teamMatchup: "",
    teamRecord: "",
    teamJumboPhoto: "",
  },
  {
    teamCity: "los angeles",
    teamNameLower: "chargers",
    teamPrimaryCSS: "#002A5E",
    teamSecondaryCSS: "#FFC20E",
    teamAbbr: "LAC",
    teamGametime: "",
    teamLogo: "",
    teamDivName: "",
    teamDivRank: "",
    teamIsHome: "",
    teamProperName: "",
    teamLowerFull: "",
    teamCurrentScore: "",
    teamMatchup: "",
    teamRecord: "",
    teamJumboPhoto: "",
  }, {

    teamCity: "los angeles",
    teamNameLower: "rams",
    teamPrimaryCSS: "#002244",
    teamSecondaryCSS: "#866D4B",
    teamAbbr: "LA",
    teamGametime: "",
    teamLogo: "",
    teamDivName: "",
    teamDivRank: "",
    teamIsHome: "",
    teamProperName: "",
    teamLowerFull: "",
    teamCurrentScore: "",
    teamMatchup: "",
    teamRecord: "",
    teamJumboPhoto: "",
  },
  {
    teamCity: "miami",
    teamNameLower: "dolphins",
    teamPrimaryCSS: "#008E97",
    teamSecondaryCSS: "#F26A24",
    teamAbbr: "MIA",
    teamGametime: "",
    teamLogo: "",
    teamDivName: "",
    teamDivRank: "",
    teamIsHome: "",
    teamProperName: "",
    teamLowerFull: "",
    teamCurrentScore: "",
    teamMatchup: "",
    teamRecord: "",
    teamJumboPhoto: "",
  },
  {
    teamCity: "minnesota",
    teamNameLower: "vikings",
    teamPrimaryCSS: "#4F2683",
    teamSecondaryCSS: "#FFC62F",
    teamAbbr: "MIN",
    teamGametime: "",
    teamLogo: "",
    teamDivName: "",
    teamDivRank: "",
    teamIsHome: "",
    teamProperName: "",
    teamLowerFull: "",
    teamCurrentScore: "",
    teamMatchup: "",
    teamRecord: "",
    teamJumboPhoto: "",
  }, {
    teamCity: "new england",
    teamNameLower: "patriots",
    teamPrimaryCSS: "#002244",
    teamSecondaryCSS: "#C60C30",
    teamAbbr: "NE",
    teamGametime: "",
    teamLogo: "",
    teamDivName: "",
    teamDivRank: "",
    teamIsHome: "",
    teamProperName: "",
    teamLowerFull: "",
    teamCurrentScore: "",
    teamMatchup: "",
    teamRecord: "",
    teamJumboPhoto: "",
  }, {

    teamCity: "new orleans",
    teamNameLower: "saints",
    teamPrimaryCSS: "#D3BC8D",
    teamSecondaryCSS: "#101820",
    teamAbbr: "NO",
    teamGametime: "",
    teamLogo: "",
    teamDivName: "",
    teamDivRank: "",
    teamIsHome: "",
    teamProperName: "",
    teamLowerFull: "",
    teamCurrentScore: "",
    teamMatchup: "",
    teamRecord: "",
    teamJumboPhoto: "",
  },
  {
    teamCity: "new york",
    teamNameLower: "giants",
    teamPrimaryCSS: "#0B2265",
    teamSecondaryCSS: "#A71930",
    teamAbbr: "NYG",
    teamGametime: "",
    teamLogo: "",
    teamDivName: "",
    teamDivRank: "",
    teamIsHome: "",
    teamProperName: "",
    teamLowerFull: "",
    teamCurrentScore: "",
    teamMatchup: "",
    teamRecord: "",
    teamJumboPhoto: "",
  },
  {
    teamCity: "new york",
    teamNameLower: "jets",
    teamPrimaryCSS: "#003F2D",
    teamSecondaryCSS: "#FFFFFF",
    teamAbbr: "NYJ",
    teamGametime: "",
    teamLogo: "",
    teamDivName: "",
    teamDivRank: "",
    teamIsHome: "",
    teamProperName: "",
    teamLowerFull: "",
    teamCurrentScore: "",
    teamMatchup: "",
    teamRecord: "",
    teamJumboPhoto: "",
  },
  {
    teamCity: "oakland",
    teamNameLower: "raiders",
    teamPrimaryCSS: "#000000",
    teamSecondaryCSS: "#A5ACAF",
    teamAbbr: "OAK",
    teamGametime: "",
    teamLogo: "",
    teamDivName: "",
    teamDivRank: "",
    teamIsHome: "",
    teamProperName: "",
    teamLowerFull: "",
    teamCurrentScore: "",
    teamMatchup: "",
    teamRecord: "",
    teamJumboPhoto: "",
  },
  {
    teamCity: "philadelphia",
    teamNameLower: "eagles",
    teamPrimaryCSS: "#004C54",
    teamSecondaryCSS: "#A5ACAF",
    teamAbbr: "PHI",
    teamGametime: "",
    teamLogo: "",
    teamDivName: "",
    teamDivRank: "",
    teamIsHome: "",
    teamProperName: "",
    teamLowerFull: "",
    teamCurrentScore: "",
    teamMatchup: "",
    teamRecord: "",
    teamJumboPhoto: "",
  },
  {
    teamCity: "pittsburgh",
    teamNameLower: "steelers",
    teamPrimaryCSS: "#FFB612",
    teamSecondaryCSS: "#101820",
    teamAbbr: "PIT",
    teamGametime: "",
    teamLogo: "",
    teamDivName: "",
    teamDivRank: "",
    teamIsHome: "",
    teamProperName: "",
    teamLowerFull: "",
    teamCurrentScore: "",
    teamMatchup: "",
    teamRecord: "",
    teamJumboPhoto: "",
  }, {

    teamCity: "san francisco",
    teamNameLower: "niners",
    teamPrimaryCSS: "#AA0000",
    teamSecondaryCSS: "#B3995D",
    teamAbbr: "SF",
    teamGametime: "",
    teamLogo: "",
    teamDivName: "",
    teamDivRank: "",
    teamIsHome: "",
    teamProperName: "",
    teamLowerFull: "",
    teamCurrentScore: "",
    teamMatchup: "",
    teamRecord: "",
    teamJumboPhoto: "",
  },
  {
    teamCity: "seattle",
    teamNameLower: "seahawks",
    teamPrimaryCSS: "#002244",
    teamSecondaryCSS: "#69BE28",
    teamAbbr: "SEA",
    teamGametime: "",
    teamLogo: "",
    teamDivName: "",
    teamDivRank: "",
    teamIsHome: "",
    teamProperName: "",
    teamLowerFull: "",
    teamCurrentScore: "",
    teamMatchup: "",
    teamRecord: "",
    teamJumboPhoto: "",
  }, {

    teamCity: "tampa bay",
    teamNameLower: "buccaneers",
    teamPrimaryCSS: "#D50A0A",
    teamSecondaryCSS: "#FF7900",
    teamAbbr: "TB",
    teamGametime: "",
    teamLogo: "",
    teamDivName: "",
    teamDivRank: "",
    teamIsHome: "",
    teamProperName: "",
    teamLowerFull: "",
    teamCurrentScore: "",
    teamMatchup: "",
    teamRecord: "",
    teamJumboPhoto: "",
  },
  {
    teamCity: "tennessee",
    teamNameLower: "titans",
    teamPrimaryCSS: "#002A5C",
    teamSecondaryCSS: "#4495D1",
    teamAbbr: "TEN",
    teamGametime: "",
    teamLogo: "",
    teamDivName: "",
    teamDivRank: "",
    teamIsHome: "",
    teamProperName: "",
    teamLowerFull: "",
    teamCurrentScore: "",
    teamMatchup: "",
    teamRecord: "",
    teamJumboPhoto: "",
  },
  {
    teamCity: "washington",
    teamNameLower: "redskins",
    teamPrimaryCSS: "#773141",
    teamSecondaryCSS: "#FFB612",
    teamAbbr: "WAS",
    teamGametime: "",
    teamLogo: "",
    teamDivName: "",
    teamDivRank: "",
    teamIsHome: "",
    teamProperName: "",
    teamLowerFull: "",
    teamCurrentScore: "",
    teamMatchup: "",
    teamRecord: "",
    teamJumboPhoto: "",
  }
];


(function(){
  teamData.forEach(squad => {
    squad.teamLowerFull = `${squad.teamCity} ${squad.teamNameLower}`;
    squad.teamProperName = `${titleCase(squad.teamCity)} ${titleCase(squad.teamNameLower)}`;
    squad.teamLowerPart = `${titleCase(squad.teamNameLower).toLowerCase()}`;
    squad.teamJumboPhoto = `/photos/$${squad.teamNameLower}.png`;
    squad.teamLogo = `/photos/${squad.teamNameLower}.gif`;
  });
})();

(function(){
  const url = location.href.split("/");
  const team = url[url.length - 1]
  teamData.forEach((squad, i) => {
    if (dataCheck(squad.teamNameLower, team)) {
      currentTeamData["data"] = squad[i];
    }
  })
})();

(function(){
  $.ajax({
    method: "GET",
    url: "/api/divisions"
  }).then((data) => {
    data.forEach((squad, i) => {
      if (dataCheck(teamNameLower, squad.name.toLowerCase())) {
        teamData[i].teamRecord = `${squad.wins} - ${squad.losses} - ${squad.ties}`;
        teamData[i].teamDivRank = team.divisionName;
        teamData[i].teamDivName = team.divisionRank;
      }
    })
  })
})();

(function(){

  const teamName = currentTeamData.teamLowerFull;

  $.ajax({
    url: "/api/news/" + teamName,
    method: "GET"
  }).then(function (data) {
    console.log(data)
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

    $(".article-pic-left").forEach((article, i) => {
      $(".text")[i].innerText = teamNewsArray[i].title;
      $(".article-pic-left")[i].src = teamNewsArray[i].urlToImage;

      $(".article-pic-left").on("error", function () {
        $(this).attr('src', `/photos/$${team}.png`);
      });
    })
  })
})();

(function(){

  const team = currentTeamData.teamNameLower;

  //variable for the root class set for CSS Variables
  const root = document.querySelector(':root');

  //assign and set primary and secondary colors from teamData object based on team
    $("#team-headline").text(team)
    const $primaryColor = teamData[team].primary;
    const $secondaryColor = teamData[team].secondary;
    root.style.setProperty('--primary-color', $primaryColor)
    root.style.setProperty('--secondary-color', $secondaryColor)

    //changing image based on team
    const $jumboImage = `/photos/$${team}.png`
    $(".jumbo-image").attr("src", $jumboImage);

    $("#teamCity").text(teamData[team].city.toUpperCase())
    $("#teamName").text(teamData[team].name.toUpperCase())
  
})();

(function(){

  const teamAbbr = currentTeamData.teamAbbr;

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

      $("#roster-table > tbody").append($tableRow)

    })
  })
})();




setTeamInitialValues();
setCurrentTeam();
setRecords();
setTeamNews();
setTeamPage();
setRoster();




















