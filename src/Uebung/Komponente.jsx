export function Absatz() {
    return (
        <>
            <p>Ich bin ein Absatz.</p>
        </>
    );
}

export function Foto({ fotoUrl="Platzhalter", size="100px", alternative }) {
    return (
        <>
            <img src={fotoUrl} width={size} height={size} alt={alternative.alt2} />
        </>
    );
}

export default function Komponente() {
    return (
        <>
            <p>Hallo, ich bin eine Komponente</p>
        </>
    );
}