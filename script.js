teams = [
  "San Francisco 49ers",
  "Chicago Bears",
  "Cincinnati Bengals",
  "Buffalo Bills",
  "Denver Broncos",
  "Cleveland Browns",
  "Arizona Cardinals",
  "Los Angeles Chargers",
  "Kansas City Chiefs",
  "Indianapolis Colts",
  "Dallas Cowboys",
  "Miami Dolphins",
  "Philadelphia Eagles",
  "Atlanta Falcons",
  "New York Giants",
  "Jacksonville Jaguars",
  "New York Jets",
  "Detroit Lions",
  "Green Bay Packers",
  "Carolina Panthers",
  "New England Patriots",
  "Las Vegas Raiders",
  "Los Angeles Rams",
  "Baltimore Ravens",
  "Washington Commanders",
  "New Orleans Saints",
  "Seattle Seahawks",
  "Pittsburgh Steelers",
  "Tampa Bay Buccaneers",
  "Houston Texans",
  "Tennessee Titans",
  "Minnesota Vikings",
];

// outputs one team
function oneRandomTeam() {
  let randomNumber = Math.floor((Math.random() * teams.length) | 0);
  var oneNewTeam = teams[randomNumber]; // one random team
  teams.splice(Math.floor(randomNumber), 1)[0]; // remove team from 'teams' array
  // based on the id of the button that uses this function, the divName and buttonName variables are assigned different values which are later used to disable the appropriate button and append the html element to correct place
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
  var newTeamElement = document.createElement("h4"); // assigns string to an html element
  oneNewTeam = `${startNum}. ` + oneNewTeam;
  newTeamElement.textContent = oneNewTeam; // string of team
  document.getElementById(divName).append(newTeamElement); // new html element of team name appended to document
  document.getElementById(buttonName).disabled = true;
}
document
  .getElementById("newFavTeamButton")
  .addEventListener("click", oneRandomTeam);
document
  .getElementById("newDisTeamButton")
  .addEventListener("click", oneRandomTeam);

// outputs an array of ten teams
function tenRandomTeams() {
  var arrayOfTenTeams = [];
  var tenTeams = 10;
  // an empty array is filled with ten randomly selected teams from the 'teams' array, those teams are also removed from the 'teams' array
  for (var i = 0; i < tenTeams; i++) {
    let randomNumber = Math.floor((Math.random() * teams.length) | 0);
    var selectOneRandomTeam = teams.splice(randomNumber, 1)[0];
    arrayOfTenTeams.push(selectOneRandomTeam);
  }
  // based on the id of the button that uses this function, the divName and buttonName variables are assigned different values which are later used to disable the appropriate button and append the html element to correct place
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
  // give each team its own element and append to document
  for (var i = 0; i < tenTeams; i++) {
    var newTeamElements = document.createElement("h4"); // // assigns string to an html element. I needed this because the new elements for multiple teams was changing the element for the single team, that is a bug I can work out later
    arrayOfTenTeams[i] = `${i + startNum}. ` + arrayOfTenTeams[i]; // insert line breaks between each team, doesn't seem to be working, a space is being added though
    newTeamElements.textContent = arrayOfTenTeams[i];
    document.getElementById(divName).append(newTeamElements);
  }
  document.getElementById(buttonName).disabled = true;

  return arrayOfTenTeams;
}
document
  .getElementById("tenNewFavTeamsButton")
  .addEventListener("click", tenRandomTeams);
document
  .getElementById("tenNewMidTeamsButton")
  .addEventListener("click", tenRandomTeams);
document
  .getElementById("tenNewDisTeamsButton")
  .addEventListener("click", tenRandomTeams);

// console.log(tenRandomTeams(teams));

// ----
// the following logic came from W3 Schools, when a "reveal team(s)" button is press it makes the slow accordian reveal of teams. here is the link: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_accordion_animate
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
// ----

// ability to have Reload Page buttons at the top and bottom of the page
function reloadPage() {
  window.location.reload();
  console.log(1);
}
var reloadButtons = document.getElementsByClassName("reloadButton");
//   .addEventListener("click", refreshPage);
for (var i = 0; i < reloadButtons.length; i++) {
  reloadButtons[i].addEventListener("click", reloadPage);
}
