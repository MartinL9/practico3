function TotalGames({ userName }) {
    return (
        <>
            {userName && (
                <div>
                    <p>Juegos Totales</p>
                    <span></span>
                </div>
            )}
        </>
    );
}

export default TotalGames;