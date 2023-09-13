import './App.css';
import { useState } from 'react';
import Titulo from './Components/Titulo';
import UserInput from './Components/UserInput';
import Score from './Components/Score';
import ResultMatch from './Components/ResultMatch';
import BtnChoices from './Components/BtnChoices';
import HistoryGames from './Components/HistoryGames';
import TotalGames from './Components/TotalGames';
import TotalRounds from './Components/TotalRounds';
import GameOutCome from './Components/GameOutCome';

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

    if (roundResult === '¡Ganaste!') {
      setUserScore((prevUserScore) => prevUserScore + 1);
    } else if (roundResult === '¡Perdiste!') {
      setPcScore(pcScore + 1);
    }

    setHasMadeChoice(true);

    if (roundResult !== '¡Empate vuelve a jugar!') {
      setRound((prevRound) => prevRound + 1);
    }

    if (round === 4) {
      if(userScore > pcScore) {
        setWinner(userName);
      } else if (pcScore > userScore) {
        setWinner('Computadora');
      }
      if (roundResult !== '¡Empate vuelve a jugar!') {
        setBtnDisabled(true);
      }
    } else if (round === 5) {
      setBtnDisabled(true);
    }
  }
  
  const handleGameReset = () => {
    setPlayerChoice(null);
    setPcChoice(null);
    setUserScore(0);
    setPcScore(0);
    setHasMadeChoice(false);
    setRound(0);
    setBtnDisabled(false);
  }

  const handleAllReset = () => {
    handleGameReset();
    setUserName('');
    setIsUsernameValid(false);
  }

  return (
    <div className="App">
      <Titulo onAllReset={handleAllReset} />
      {!userName && (
        <UserInput 
          onStartGame={handleStartGame} 
        />
      )}
      <Score 
        userName={userName} 
        userScore={userScore} 
        pcScore={pcScore}
      />
      <BtnChoices 
        onPlayerChoice={handlePlayersChoice} 
        isUsernameValid={isUsernameValid}
        btnDisabled={btnDisabled}
      />
      {hasMadeChoice && (
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
      {round === 5 && hasMadeChoice && (
        <GameOutCome 
          userName={userName}
          winner={winner} 
          onGameReset={handleGameReset} 
        />
      )}
      <HistoryGames userName={userName}/>
      <TotalGames userName={userName}/>
    </div>
  );
}

export default App;