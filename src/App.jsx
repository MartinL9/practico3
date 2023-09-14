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

function App() {
  const [userName, setUserName] = useState('');
  const [isUsernameValid, setIsUsernameValid] = useState(false);
  const [playerChoice, setPlayerChoice] = useState(null);
  const [pcChoice, setPcChoice] = useState(null);
  const [userScore, setUserScore] = useState(0);
  const [pcScore, setPcScore] = useState(0);
  const [hasMadeChoice, setHasMadeChoice] = useState(false);
  const [round, setRound] = useState(0);
  const [winner, setWinner] = useState(null);
  const [btnDisabled, setBtnDisabled] = useState(false);
  const [totalGames, setTotalGames] = useState(0);
  const [userW, setUserW] = useState(0);
  const [pcW, setPcW] = useState(0);
  
  const handleStartGame = (playerName) => {
    setUserName(playerName);
    setIsUsernameValid(true);
  }; 

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

    if (roundResult !== '¡Empate vuelve a jugar!') {
      setRound((prevRound) => prevRound + 1);
    }
  }
  
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
  
  useEffect(() => {
    if (winner !== null) {
      if (winner === userName) {
        setUserW((prevUserW) => prevUserW + 1);
      } else {
        setPcW((prevPcW) => prevPcW + 1);
      }
    }
  }, [winner, userName]);

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
        <MatchBoard userChoice={playerChoice} isUser={true} pcChoice={pcChoice} />
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
    </div>
  );
}

export default App;