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
  
  const handleStartGame = (playerName) => {
    setUserName(playerName);
    setIsUsernameValid(true);
  }; 

  const detResultWin = (playerChoice, pcChoice) => {
    if(playerChoice === pcChoice) {
      return '¡Empate!';
    } else if (
      (playerChoice === 'Piedra' && pcChoice === 'Tijera') ||
      (playerChoice === 'Papel' && pcChoice === 'Piedra') ||
      (playerChoice === 'Tijera' && pcChoice === 'Papel') 
    ) {
      setUserScore(userScore + 1);
      return '¡Ganaste!'
    } else {
      setPcScore(pcScore + 1);
      return '¡Perdiste!'
    }
  }

  const handlePlayersChoice = (playerChoice, pcChoice) => {
    setPlayerChoice(playerChoice);
    setPcChoice(pcChoice);
    const result = detResultWin(playerChoice, pcChoice);
    setHasMadeChoice(true);
    setRound(round + 1);
  }
  
  const handleGameReset = () => {
    setPlayerChoice(null);
    setPcChoice(null);
    setUserScore(0);
    setPcScore(0);
    setHasMadeChoice(false);
    setRound(0);
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
        <UserInput onStartGame={handleStartGame} />
      )}
      <Score 
        userName={userName} 
        userScore={userScore} 
        pcScore={pcScore}
      />
      <BtnChoices 
        onPlayerChoice={handlePlayersChoice} 
        isUsernameValid={isUsernameValid}
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
        userScore={userScore} 
        pcScore={pcScore}
      />
      {round === 5 && hasMadeChoice && (
        <GameOutCome 
          userName={userName} 
          onGameReset={handleGameReset} 
        />
      )}
      <HistoryGames userName={userName}/>
      <TotalGames userName={userName}/>
    </div>
  );
}

export default App;