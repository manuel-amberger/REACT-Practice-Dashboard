export function Button({ buttonHandler, className, children }) {
    return (
        <button className={className} onClick={buttonHandler}>
            {children}
        </button>
    );
}

export function ButtonTooltipTeams({ buttonHandler, showTeams }) {
    return (
        <Button className="teamButton" buttonHandler={buttonHandler}>
            {showTeams ? 'Teams ausblenden' : 'Teams einblenden'}
        </Button>
    );
}