//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here
function createManager(managerName, managerAge, currentTeam, trophiesWon) {
  return [managerName, managerAge, currentTeam, trophiesWon];
}

// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

//write your function here
function createFormation(formation) {
  if (formation.length > 0) {
    return {
      defender: formation[0],
      midfield: formation[1],
      forward: formation[2],
    };
  } else {
    return null;
  }
}
// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
function filterByDebut(debutYear) {
  let filteredPlayers = [];
  players.forEach(function (player) {
    if (player.debut == debutYear) {
      filteredPlayers.push(player);
    }
  });
  return filteredPlayers;
}

//Progression 4 - Filter players that play at the position _______
function filterByPosition(playPosition) {
  let positionPlayers = [];
  players.forEach(function (player) {
    if (player.position == playPosition) {
      positionPlayers.push(player);
    }
  });
  return positionPlayers;
}

//Progression 5 - Filter players that have won ______ award
function filterByAward(awardTitle) {
  return players.filter((player) =>
    player.awards.some((award) => award.name === awardTitle)
  );
}

//Progression 6 - Filter players that won ______ award ____ times
function filterByAwardxTimes(awardTitle, times) {
  return awardTitle
    ? players.filter(
        (player) =>
          player.awards.filter((award) => award.name === awardTitle).length ===
          times
      )
    : [];
}

//Progression 7 - Filter players that won ______ award and belong to ______ country
function filterByAwardxCountry(awardTitle, playerCountry) {
  let countryPlayers = players.filter((player) => {
    return player.country === playerCountry;
  });

  let selectedPlayers = countryPlayers.filter((player) => {
    let hasAward = player.awards.some((award) => {
      return award.name === awardTitle;
    });
    return hasAward;
  });

  return selectedPlayers;
}

//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____
function filterByNoOfAwardsxTeamxAge(minAwards, teamName, maxAge) {
  return players
    ? players.filter(
        (player) =>
          player.team == teamName &&
          player.age < maxAge &&
          player.awards.length >= minAwards
      )
    : [];
}

//Progression 9 - Sort players in descending order of their age
function sortByAgeDesc() {
  players.sort((a, b) => b.age - a.age);
}

//Progression 10 - Sort players belonging to _____ team in descending order of awards won
function filterByTeamxSortByAwards(teamName) {
  const teamPlayers = players.filter((player) => player.team === teamName);
  return teamPlayers.sort((a, b) => b.awards.length - a.awards.length);
}

//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names
function sortByNamexAwardxTimes(awardTitle, times, playerCountry) {
  return awardTitle
    ? players.filter(
        (player) =>
          player.awards.filter((award) => award.name === awardTitle).length ===
            times && player.country === playerCountry
      )
    : [];
}

//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order
function sortByNamexOlderThan(minAge) {
  if (!minAge) {
    return [];
  } else {
    const filteredPlayers = players.filter((player) => player.age >= minAge);
    if (filteredPlayers.length < 1) {
      return [];
    } else {
      filteredPlayers.forEach((player) => {
        player.awards.sort((a, b) => b.year - a.year); // Sort awards in reverse chronological order
      });
    }

    filteredPlayers.sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      let comparison = 0;

      if (nameA > nameB) {
        comparison = 1;
      } else if (nameA < nameB) {
        comparison = -1;
      }

      return comparison;
    });

    return filteredPlayers;
  }
}
