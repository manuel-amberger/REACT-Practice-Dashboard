export const drivers = [
  { id: 1, name: "Max Verstappen", team: "Red Bull Racing", position: 1, inPit: false, points: 393 },
  { id: 2, name: "Lando Norris", team: "McLaren", position: 2, inPit: false, points: 331 },
  { id: 3, name: "Charles Leclerc", team: "Ferrari", position: 3, inPit: true, points: 307 },
  { id: 4, name: "Oscar Piastri", team: "McLaren", position: 4, inPit: false, points: 262 },
  { id: 5, name: "Carlos Sainz", team: "Ferrari", position: 5, inPit: false, points: 244 },
  { id: 6, name: "Lewis Hamilton", team: "Mercedes", position: 6, inPit: true, points: 190 },
  { id: 7, name: "George Russell", team: "Mercedes", position: 7, inPit: false, points: 177 },
  { id: 8, name: "Sergio Perez", team: "Red Bull Racing", position: 8, inPit: false, points: 151 },
  { id: 9, name: "Fernando Alonso", team: "Aston Martin", position: 9, inPit: false, points: 132 },
  { id: 10, name: "Lance Stroll", team: "Aston Martin", position: 10, inPit: true, points: 98 },
  { id: 11, name: "Alex Albon", team: "Williams", position: 11, inPit: false, points: 84 },
  { id: 12, name: "Yuki Tsunoda", team: "RB", position: 12, inPit: false, points: 76 },
  { id: 13, name: "Esteban Ocon", team: "Alpine", position: 13, inPit: false, points: 61 },
  { id: 14, name: "Pierre Gasly", team: "Alpine", position: 14, inPit: true, points: 54 },
  { id: 15, name: "Nico Hülkenberg", team: "Haas", position: 15, inPit: false, points: 42 },
  { id: 16, name: "Kimi Antonelli", team: "Mercedes", position: 16, inPit: false, points: 29 },
  { id: 17, name: "Oliver Bearman", team: "Haas", position: 17, inPit: false, points: 21 },
  { id: 18, name: "Liam Lawson", team: "RB", position: 18, inPit: true, points: 14 },
  { id: 19, name: "Gabriel Bortoleto", team: "Sauber", position: 19, inPit: false, points: 8 },
  { id: 20, name: "Franco Colapinto", team: "Williams", position: 20, inPit: false, points: 3 }
];

export function getSortedDrivers(showPit) {
  let sorted = [...drivers].sort((a, b) => b.points - a.points);

  if (showPit) {
    return sorted;
  }

  return sorted.filter(driver => !driver.inPit);
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