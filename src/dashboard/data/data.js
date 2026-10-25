export const drivers = [
  { id: 1, name: "Max Verstappen", team: "Red Bull Racing", position: 1, inPit: false, points: 393 },
  { id: 2, name: "Lando Norris", team: "McLaren", position: 2, inPit: false, points: 331 },
  { id: 3, name: "Charles Leclerc", team: "Ferrari", position: 3, inPit: true, points: 307 },
  { id: 4, name: "Oscar Piastri", team: "McLaren", position: 4, inPit: false, points: 262 },
  { id: 5, name: "Carlos Sainz", team: "Ferrari", position: 5, inPit: false, points: 244 },
  { id: 6, name: "Lewis Hamilton", team: "Mercedes", position: 6, inPit: true, points: 190 },
  { id: 7, name: "George Russell", team: "Mercedes", position: 7, inPit: false, points: 177 },
  { id: 8, name: "Sergio Perez", team: "Red Bull Racing", position: 8, inPit: false, points: 151 }
];

export function getSortedDrivers() {
  return [...drivers].sort((a, b) => b.points - a.points);
}

export function getTeams() {
  let teams = [];

  drivers.forEach(driver => {
    if (!teams.includes(driver.team)) {
      teams.push(driver.team)
    }
  });
  
  return teams;
}