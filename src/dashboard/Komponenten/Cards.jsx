export function TeamCard({ team, drivers }) {
    return (
        <div key={team} className="teamCard">
            <h3 className="teamTitle">{team}</h3>
            <div className="driverCardContainer">
                {drivers.map(driver => (
                    <DriverCard key={driver.id} driver={driver} mode="team" />
                ))}
            </div>
        </div>
    );
}

export default function DriverCard({ driver, mode="leaderboard" }) {
    return (
        <div className={`card driverCard ${(driver.inPit && mode === "leaderboard") ? 'inPit' : ''}`} style={{ width : "320px" }}>
            <div className="card-body">
                <h4 className="card-title">{mode === "leaderboard" ? `#${driver.position} - ${driver.name}` : `${driver.name}`}</h4>
                <p className="card-subtitle fg-3">{driver.team}</p>
                <p className="card-text">{mode === "leaderboard" ? `${driver.inPit ? 'In Pit' : 'On Track'} - ` : ''}{driver.points} Points</p>
            </div>
        </div>
    );
}