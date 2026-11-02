import './App.css'
import { useState } from 'react';

// import { drivers } from './data.js'
import * as driverData from './dashboard/data/data.js'
import DriverCard from './dashboard/Komponenten/Cards.jsx'
import { TeamCard } from './dashboard/Komponenten/Cards.jsx'
import { ButtonTooltipTeams } from './dashboard/Komponenten/Controls/Button.jsx'
import { Checkbox } from './dashboard/Komponenten/Controls/Checkbox.jsx';

function Heading() {
  return (
    <div>
      <h1>Race Dashboard</h1>
      <p>Welcome to the Race Dashboard</p>
    </div>
  );
}

function LeaderBoard() {
  const [showPit, setShowPit] = useState(true);

  function handleShowPit() {
    setShowPit(!showPit);
  }

  const sortedDrivers = driverData.getSortedDrivers(showPit);

  return (
    <div>
      <h2>Leaderboard</h2>

      <Checkbox label="Show drivers in PIT" checked={showPit} onChange={handleShowPit} />

      <div className="driverCardContainer">
        {sortedDrivers.map(d => (
          <DriverCard key={d.id} driver={d} mode="leaderboard" />
        ))}
      </div>
    </div>
  );
}

function Teams() {
  const [showTeams, setShowTeams] = useState(false);
  const teams = driverData.getTeams();

  function handleShowTeams() {
    setShowTeams(!showTeams);
  }

  return (
    <div>
      <h2>Teams</h2>
      <ButtonTooltipTeams buttonHandler={handleShowTeams} showTeams={showTeams} />

      { 
        showTeams &&
        <div className="teamContainer">
          {teams.map(team => (
            <TeamCard key={team} team={team} drivers={driverData.drivers.filter(d => d.team === team)} />
          ))}
        </div>
      }
    </div>
  );
}

export default function App() {
  return (
    <>
      <Heading />
      <LeaderBoard />
      <Teams />
    </>
  );
}