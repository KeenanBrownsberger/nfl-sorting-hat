// array of team objects
teamsArr = [
  {
    teamName: "San Francisco 49ers",
    primary: "#AA0000",
    secondary: "#B3995D",
  },
  {
    teamName: "Chicago Bears",
    primary: "#0B162A",
    secondary: "#C83803",
  },
  {
    teamName: "Cincinnati Bengals",
    primary: "#FB4F14",
    secondary: "#000000",
  },
  {
    teamName: "Buffalo Bills",
    primary: "#00338D",
    secondary: "#C60C30",
  },
  {
    teamName: "Denver Broncos",
    primary: "#FB4F14",
    secondary: "#002244",
  },
  {
    teamName: "Cleveland Browns",
    primary: "#311D00",
    secondary: "#FF3C00",
  },
  {
    teamName: "Arizona Cardinals",
    primary: "#97233F",
    secondary: "#000000",
  },
  {
    teamName: "Los Angeles Chargers",
    primary: "#0080C6",
    secondary: "#FFC20E",
  },
  {
    teamName: "Kansas City Chiefs",
    primary: "#E31837",
    secondary: "#FFB81C",
  },
  {
    teamName: "Indianapolis Colts",
    primary: "#002C5F",
    secondary: "#A2AAAD",
  },
  {
    teamName: "Dallas Cowboys",
    primary: "#041E42",
    secondary: "#869397",
  },
  {
    teamName: "Miami Dolphins",
    primary: "#008E97",
    secondary: "#FC4C02",
  },
  {
    teamName: "Philadelphia Eagles",
    primary: "#004C54",
    secondary: "#A5ACAF",
  },
  {
    teamName: "Atlanta Falcons",
    primary: "#A71930",
    secondary: "#000000",
  },
  {
    teamName: "New York Giants",
    primary: "#0B2265",
    secondary: "#A71930",
  },
  {
    teamName: "Jacksonville Jaguars",
    primary: "#101820",
    secondary: "#D7A22A",
  },
  {
    teamName: "New York Jets",
    primary: "#125740",
    secondary: "#000000",
  },
  {
    teamName: "Detroit Lions",
    primary: "#0076B6",
    secondary: "#B0B7BC",
  },
  {
    teamName: "Green Bay Packers",
    primary: "#203731",
    secondary: "#FFB612",
  },
  {
    teamName: "Carolina Panthers",
    primary: "#0085CA",
    secondary: "#101820",
  },
  {
    teamName: "New England Patriots",
    primary: "#002244",
    secondary: "#C60C30",
  },
  {
    teamName: "Las Vegas Raiders",
    primary: "#000000",
    secondary: "#A5ACAF",
  },
  {
    teamName: "Los Angeles Rams",
    primary: "#003594",
    secondary: "#FFA300",
  },
  {
    teamName: "Baltimore Ravens",
    primary: "#241773",
    secondary: "#000000",
  },
  {
    teamName: "Washington Commanders",
    primary: "#5A1414",
    secondary: "#FFB612",
  },
  {
    teamName: "New Orleans Saints",
    primary: "#D3BC8D",
    secondary: "#101820",
  },
  {
    teamName: "Seattle Seahawks",
    primary: "#002244",
    secondary: "#69BE28",
  },
  {
    teamName: "Pittsburgh Steelers",
    primary: "#FFB612",
    secondary: "#101820",
  },
  {
    teamName: "Tampa Bay Buccaneers",
    primary: "#D50A0A",
    secondary: "#FF7900",
  },
  {
    teamName: "Houston Texans",
    primary: "#03202F",
    secondary: "#A71930",
  },
  {
    teamName: "Tennessee Titans",
    primary: "#0C2340",
    secondary: "#4B92DB",
  },
  {
    teamName: "Minnesota Vikings",
    primary: "#4F2683",
    secondary: "#FFC62F",
  },
];

// splits the name of the team into the city and mascot and returns an array
function splitCityAndMascot(team) {
  if (typeof team === "object") {
    // for spliting ten teams
    var splitArrOfTeamName = team.teamName.split(" "); // outputs array of all strings in the team name broken apart at each " "
    var cityName = team.teamName.substring(0, team.teamName.lastIndexOf(" ")); // to grab the city name from the whole string of the team name, a variable is assigned from index 0 until the last " " of the team name
  } else {
    // for spliting one team
    var splitArrOfTeamName = team.split(" ");
    var cityName = team.substring(0, team.lastIndexOf(" "));
  }
  var mascotName = splitArrOfTeamName[splitArrOfTeamName.length - 1]; // grabs the last word in the array and assigns it to a variable
  return [cityName, mascotName]; // return array of cityName and mascotName
}

// appends one team to the page
function oneRandomTeam() {
  let randomNumber = Math.floor((Math.random() * teamsArr.length) | 0);
  var oneNewTeam = teamsArr[randomNumber]; // one random team
  teamsArr.splice(Math.floor(randomNumber), 1)[0]; // remove team from 'teamsArr' array
  var arrOfCityAndMascot = splitCityAndMascot(oneNewTeam.teamName); // arrOfCityAndMascot = [cityName, mascotName]
  // based on the id of the button that uses this function, the divName and buttonName variables are assigned different values which are used to disable the appropriate button and append the html element to correct place
  var divName;
  var buttonName;
  var startNum;
  switch (this.id) {
    case "newFavTeamButton":
      (divName = "newFavTeamDiv"),
        (buttonName = "newFavTeamButton"),
        (startNum = 1),
        (this.className += " disabled");
      break;
    case "newDisTeamButton":
      (divName = "newDisTeamDiv"),
        (buttonName = "newDisTeamButton"),
        (startNum = 32),
        (this.className += " disabled");
      break;
  }
  var teamNumber = document.createElement("h4");
  var teamCityName = document.createElement("h4");
  var teamMascotName = document.createElement("h4");
  teamNumber.style.color = "#000000";
  teamCityName.style.color = oneNewTeam.primary;
  teamMascotName.style.color = oneNewTeam.secondary;
  teamNumber.textContent = `${startNum}. `;
  teamCityName.textContent = arrOfCityAndMascot[0];
  teamMascotName.textContent = arrOfCityAndMascot[1];
  // give each element the class name 'inline' which will display each element on the same line when they are appeneded
  teamNumber.className = "inline";
  teamCityName.className = "inline";
  teamMascotName.className = "inline";
  document
    .getElementById(divName)
    .append(teamNumber, teamCityName, " ", teamMascotName); // append team elements to the document

  document.getElementById(buttonName).disabled = true; // disables button
}
// event listeners
document
  .getElementById("newFavTeamButton")
  .addEventListener("click", oneRandomTeam);
document
  .getElementById("newDisTeamButton")
  .addEventListener("click", oneRandomTeam);

// appends ten teams to the page
function tenRandomTeams() {
  var arrayOfTenTeams = [];
  var tenTeams = 10;
  // an empty array is filled with ten randomly selected teams from the 'teamsArr' array, those teams are also removed from the 'teamsArr' array
  for (var i = 0; i < tenTeams; i++) {
    let randomNumber = Math.floor((Math.random() * teamsArr.length) | 0);
    var selectOneRandomTeam = teamsArr.splice(randomNumber, 1)[0]; // removes one random team from the 'teamsArr' array and assigns it to the selectOneRandomTeam variable
    arrayOfTenTeams.push(selectOneRandomTeam); // adds the random team to arrayOfTenTeams
    var arrOfCityAndMascot = splitCityAndMascot(selectOneRandomTeam.teamName); // arrOfCityAndMascot = [cityName, mascotName]
    arrayOfTenTeams[i].teamName = arrOfCityAndMascot; // changes the team name in the arrayOfTenTeams to now be the split array of the team city and mascot: [cityName, mascotName]
  }
  // based on the id of the button that uses this function, the divName and buttonName variables are assigned different values which are used to disable the appropriate button and append the html element to correct place
  var divName;
  var buttonName;
  var startNum;
  switch (this.id) {
    case "tenNewFavTeamsButton":
      (divName = "tenNewFavTeamsDiv"),
        (buttonName = "tenNewFavTeamsButton"),
        (startNum = 2),
        (this.className += " disabled");
      break;
    case "tenNewMidTeamsButton":
      (divName = "tenNewMidTeamsDiv"),
        (buttonName = "tenNewMidTeamsButton"),
        (startNum = 12),
        (this.className += " disabled");
      break;
    case "tenNewDisTeamsButton":
      (divName = "tenNewDisTeamsDiv"),
        (buttonName = "tenNewDisTeamsButton"),
        (startNum = 22),
        (this.className += " disabled");
      break;
  }

  // creates team <h4> elements to append to document
  for (var i = 0; i < tenTeams; i++) {
    var teamNumber = document.createElement("h4");
    var teamCityName = document.createElement("h4");
    var teamMascotName = document.createElement("h4");
    // give each element the class name 'inline' which will display each element on the same line when they are appeneded
    teamNumber.className = "inline";
    teamCityName.className = "inline";
    teamMascotName.className = "inline addLineBreak";
    teamNumber.style.color = "#000000";
    teamCityName.style.color = arrayOfTenTeams[i].primary;
    teamMascotName.style.color = arrayOfTenTeams[i].secondary;
    teamNumber.textContent = `${i + startNum}. `;
    teamCityName.textContent = arrayOfTenTeams[i].teamName[0];
    teamMascotName.textContent = arrayOfTenTeams[i].teamName[1];
    document
      .getElementById(divName)
      .append(teamNumber, teamCityName, " ", teamMascotName); // append team elements to the document
  }
  document.getElementById(buttonName).disabled = true; // disables button
}
// event listeners
document
  .getElementById("tenNewFavTeamsButton")
  .addEventListener("click", tenRandomTeams);
document
  .getElementById("tenNewMidTeamsButton")
  .addEventListener("click", tenRandomTeams);
document
  .getElementById("tenNewDisTeamsButton")
  .addEventListener("click", tenRandomTeams);

// ------------
// this logic came from W3 Schools. when a "sort team(s)" button is pressed this code makes the slow accordian reveal of the teams. here is the link: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_accordion_animate
var acc = document.getElementsByClassName("accordion");
for (var i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
// ------------

// functionality for "let's start over" button at the bottom of the page which refreshes the page
function reloadPage() {
  window.location.reload();
}
var reloadButton = document.getElementsByClassName("reloadButton");
reloadButton[0].addEventListener("click", reloadPage);
