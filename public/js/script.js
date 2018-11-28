
//variable for url to get team name
const url = location.href.split("/");
const team = url[url.length - 1]
const teamData = {
  cardinals: {
    primary: "#97233F",
    secondary: "#000000",
    city: "arizona",
    name: "cardinals"
  },

  falcons: {
    primary: "#A71930",
    secondary: "#000000",
    city: "atlanta",
    name: "falcons"
  },
  
  ravens: {
    primary: "#241773",
    secondary: "#000000",
    city: "baltimore",
    name: "ravens"
  },
  
  bills: {
    primary: "#00338D",
    secondary: "#C60C30",
    city: "buffalo",
    name: "bills"
  },
  
  panthers: {
    primary: "#0085CA",
    secondary: "#101820",
    city: "carolina",
    name: "panthers"
  },
  
  bears: {
    primary: "#0B162A",
    secondary: "#C83803",
    city: "chicago",
    name: "bears"
  },
  
  bengals: {
    primary: "#FB4F14",
    secondary: "#000000",
    city: "cincinnati",
    name: "bengals"
  },
  
  browns: {
    primary: "#311D00",
    secondary: "#FF3C00",
    city: "cleveland",
    name: "browns"
  },
  
  cowboys: {
    primary: "#003594",
    secondary: "#041E42",
    city: "dallas",
    name: "cowboys"
  },
  
  broncos: {
    primary: "#FB4F14",
    secondary: "#002244",
    city: "denver",
    name: "broncos"
  },
  
  lions: {
    primary: "#0076B6",
    secondary: "#B0B7BC",
    city: "detroit",
    name: "lions"
  },
  
  packers: {
    primary: "#203731",
    secondary: "#FFB612",
    city: "green bay",
    name: "packers"
  },
  
  texans: {
    primary: "#03202F",
    secondary: "#A71930",
    city: "houston",
    name: "texans"
  },
  
  colts: {
    primary: "#002C5F",
    secondary: "#A2AAAD",
    city: "indianapolis",
    name: "colts"
  },
  
  jaguars: {
    primary: "#101820",
    secondary: "#D7A22A",
    city: "jacksonville",
    name: "jaguars"
  },
  
  chiefs: {
    primary: "#E31837",
    secondary: "#FFB81C",
    city: "kansas city",
    name: "chiefs"
  },
  
  chargers: {
    primary: "#002A5E",
    secondary: "#FFC20E",
    city: "los angeles",
    name: "chargers"
  },
  
  rams: {
    primary: "#002244",
    secondary: "#866D4B",
    city: "los angeles",
    name: "rams"
  },
  
  dolphins: {
    primary: "#008E97",
    secondary: "#F26A24",
    city: "miami",
    name: "dolphins"
  },
  
  vikings: {
    primary: "#4F2683",
    secondary: "#FFC62F",
    city: "minnesota",
    name: "vikings"
  },
  
  patriots: {
    primary: "#002244",
    secondary: "#C60C30",
    city: "new england",
    name: "patriots"
  },
  
  saints: {
    primary: "#D3BC8D",
    secondary: "#101820",
    city: "new orleans",
    name: "saints"
  },
  
  giants: {
    primary: "#0B2265",
    secondary: "#A71930",
    city: "new york",
    name: "giants"
  },
 
  jets: {
    primary: "#003F2D",
    secondary: "#FFFFFF",
    city: "new york",
    name: "jets"
  },

  raiders: {
    primary: "#000000",
    secondary: "#A5ACAF",
    city: "oakland",
    name: "raiders"
  },

  eagles: {
    primary: "#004C54",
    secondary: "#A5ACAF",
    city: "philadelphia",
    name: "eagles"
  },

  steelers: {
    primary: "#FFB612",
    secondary: "#101820",
    city: "pittsburgh",
    name: "steelers"
  },

  niners: {
    primary: "#AA0000",
    secondary: "#B3995D",
    city: "san francisco",
    name: "49ers"
  },

  seahawks: {
    primary: "#002244",
    secondary: "#69BE28",
    city: "seattle",
    name: "seahawks"
  },

  buccaneers: {
    primary: "#D50A0A",
    secondary: "#FF7900",
    city: "tampa bay",
    name: "buccaneers"
  },

  titans: {
    primary: "#002A5C",
    secondary: "#4495D1",
    city: "tennessee",
    name: "titans"
  },

  redskins: {
    primary: "#773141",
    secondary: "#FFB612",
    city: "washington",
    name: "redskins"
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
  $.ajax({
    url: "/api/roster/" + teamName,
    method: "GET"
  }).then(function(data) {
    console.log(data)
  })
}

setRoster();