function ResultMatch({ playerChoice, pcChoice, userName }) {
    let result = '';

    if(playerChoice === pcChoice) {
        result = '¡Empate vuelve a jugar!';
    } else if (
        (playerChoice === 'Piedra' && pcChoice === 'Tijera') ||
        (playerChoice === 'Papel' && pcChoice === 'Piedra') ||
        (playerChoice === 'Tijera' && pcChoice === 'Papel') 
    ) {
        result = '¡Gana ' + userName + '!';
    } else {
        result = '¡Gana la Computadora!'
    }

    return (
        <div>
            <p>{userName} eligió: {playerChoice}</p>
            <p>Computadora eligió: {pcChoice}</p>
            <p>Resultado: {result}</p>
        </div>
    );
}

export default ResultMatch;