import './App.css';
import { useState, useEffect } from 'react';
import Titulo from './Components/Titulo';
import UserInput from './Components/UserInput';
import Score from './Components/Score';
import ResultMatch from './Components/ResultMatch';
import BtnChoices from './Components/BtnChoices';
import HistoryGames from './Components/HistoryGames';
import TotalGames from './Components/TotalGames';
import TotalRounds from './Components/TotalRounds';
import GameOutCome from './Components/GameOutCome';
import MatchBoard from './Components/MatchBoard';
import WinnerPopup from './Components/WinnerPopup';

function App() {
  // Hook para el nombre del jugador
  const [userName, setUserName] = useState('');

  // Hook para validar si se ingresó un nombre de usuario
  const [isUsernameValid, setIsUsernameValid] = useState(false);

  // Hook para la elección del jugador
  const [playerChoice, setPlayerChoice] = useState(null);

  // Hook para la elección de la computadora
  const [pcChoice, setPcChoice] = useState(null);

  // Hook para la puntuación del jugador
  const [userScore, setUserScore] = useState(0);

  // Hook para la puntuación de la computadora
  const [pcScore, setPcScore] = useState(0);

  // Hook para rastrear si el jugador ha realizado una elección
  const [hasMadeChoice, setHasMadeChoice] = useState(false);

  // Hook para rastrear el número de rondas jugadas
  const [round, setRound] = useState(0);

  // Hook para determinar al ganador del juego
  const [winner, setWinner] = useState(null);

  // Hook para deshabilitar los botones de elección
  const [btnDisabled, setBtnDisabled] = useState(false);

  // Hook para deshabilitar los botones de elección
  const [totalGames, setTotalGames] = useState(0);

  // Hook para rastrear el número de juegos ganados por el jugador
  const [userW, setUserW] = useState(0);

  // Hook para rastrear el número de juegos ganados por la computadora
  const [pcW, setPcW] = useState(0);

  // Hook para la activación de animación.
  const [animationKey, setAnimationKey] = useState(0);
  
  // Función para iniciar el juego con el nombre del jugador
  const handleStartGame = (playerName) => {
    setUserName(playerName);
    setIsUsernameValid(true);
  }; 

  // Función para determinar el resultado de la ronda
  const detResultWin = (playerChoice, pcChoice) => {
    if(playerChoice === pcChoice) {
      return '¡Empate vuelve a jugar!';
    } else if (
      (playerChoice === 'Piedra' && pcChoice === 'Tijera') ||
      (playerChoice === 'Papel' && pcChoice === 'Piedra') ||
      (playerChoice === 'Tijera' && pcChoice === 'Papel') 
    ) {
      return '¡Ganaste!'
    } else {
      return '¡Perdiste!'
    }
  }

  // Función para manejar la elección del jugador y calcular el resultado
  const handlePlayersChoice = (playerChoice, pcChoice) => {
    setPlayerChoice(playerChoice);
    setPcChoice(pcChoice);
    
    const roundResult = detResultWin(playerChoice, pcChoice);

    setUserScore((prevUserScore) => {
      if (roundResult === '¡Ganaste!') {
        return prevUserScore + 1;
      }
      return prevUserScore;
    });
  
    setPcScore((prevPcScore) => {
      if (roundResult === '¡Perdiste!') {
        return prevPcScore + 1;
      }
      return prevPcScore;
    });
  
    setHasMadeChoice(true);
    setAnimationKey(animationKey + 1);

    if (roundResult !== '¡Empate vuelve a jugar!') {
      setRound((prevRound) => prevRound + 1);
    }
  };
  
  // Hook para determinar el ganador del juego y deshabilitar los botones
  useEffect(() => {
    if (userScore === 3) {
      setWinner(userName);
      setBtnDisabled(true);
    } else if (pcScore === 3) {
      setWinner('Computadora');
      setBtnDisabled(true);
    } else if (round === 5) {
      setBtnDisabled(true);
    }

    if (winner !== null) {
      setTotalGames((prevTotalGames) => prevTotalGames + 1);
    }
  }, [userName, userScore, pcScore, round, winner]);
  
    // Hook para rastrear los juegos ganados por el jugador y la computadora
  useEffect(() => {
    if (winner !== null) {
      if (winner === userName) {
        setUserW((prevUserW) => prevUserW + 1);
      } else {
        setPcW((prevPcW) => prevPcW + 1);
      }
    }
  }, [winner, userName]);

    // Función para reiniciar el juego actual
  const handleGameReset = () => {
    setPlayerChoice(null);
    setPcChoice(null);
    setUserScore(0);
    setPcScore(0);
    setHasMadeChoice(false);
    setRound(0);
    setBtnDisabled(false);
    setWinner(null);
  }

  // Función para reiniciar todos los datos del juego
  const handleAllReset = () => {
    handleGameReset();
    setUserName('');
    setIsUsernameValid(false);
    setTotalGames(0);
    setUserW(0);
    setPcW(0);
  }

  return (
    <div className="App">
      <Titulo onAllReset={handleAllReset} />
      {!userName && (
        <UserInput 
          onStartGame={handleStartGame} 
        />
      )}
      {hasMadeChoice && (
        <MatchBoard userChoice={playerChoice} isUser={true} pcChoice={pcChoice} key={animationKey}/>
      )}
      <Score 
        userName={userName} 
        userScore={userScore} 
        pcScore={pcScore}
      />
      {winner === null && (
          <BtnChoices 
            onPlayerChoice={handlePlayersChoice} 
            isUsernameValid={isUsernameValid}
            btnDisabled={btnDisabled}
          />
          )}
      {hasMadeChoice && winner === null && (
        <ResultMatch 
          playerChoice={playerChoice} 
          pcChoice={pcChoice} 
          userName={userName}
        />
      )}
      <TotalRounds 
        userName={userName}
        round={round}
      />
      {(round === 5 || userScore === 3 || pcScore === 3) && hasMadeChoice && (
        <GameOutCome 
          userName={userName}
          winner={winner} 
          onGameReset={handleGameReset} 
        />
      )}
      <HistoryGames userName={userName} userW={userW} pcW={pcW} />
      <TotalGames userName={userName} totalGames={totalGames} />
      <WinnerPopup winner={winner}/>
    </div>
  );
}

export default App;