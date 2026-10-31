export function Button({ onClick, className, children }) {
    return (
        <button className={className} onClick={onClick}>
            {children}
        </button>
    );
}

export function ButtonTooltipTeams({ buttonHandler, showTeams }) {
    return (
        <Button className="teamButton" onClick={buttonHandler}>
            {showTeams ? 'Teams ausblenden' : 'Teams einblenden'}
        </Button>
    );
}