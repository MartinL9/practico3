import './App.css';
import { useState } from 'react';
import Titulo from './Components/Titulo';
import UserInput from './Components/UserInput';
import Score from './Components/Score';
import BtnReset from './Components/BtnReset';
import ResultMatch from './Components/ResultMatch';
import BtnChoices from './Components/BtnChoices';
import HistoryGames from './Components/HistoryGames';
import TotalGames from './Components/TotalGames';

function App() {
  const [userName, setUserName] = useState('');
  const [isUsernameValid, setIsUsernameValid] = useState(false);
  const [playerChoice, setPlayerChoice] = useState(null);
  const [pcChoice, setPcChoice] = useState(null);
  const [userScore, setUserScore] = useState(0);
  const [pcScore, setPcScore] = useState(0);
  const [hasMadeChoice, setHasMadeChoice] = useState(false);
  
  const detResultWin = (playerChoice, pcChoice) => {
    if(playerChoice === pcChoice) {
      return '¡Empate!';
    } else if (
      (playerChoice === 'Piedra' && pcChoice === 'Tijera') ||
      (playerChoice === 'Papel' && pcChoice === 'Piedra') ||
      (playerChoice === 'Tijera' && pcChoice === 'Papel') 
    ) {
      setUserScore(userScore + 1);
    } else {
      setPcScore(pcScore + 1);
    }
  }

  const handlePlayersChoice = (playerChoice, pcChoice) => {
    setPlayerChoice(playerChoice);
    setPcChoice(pcChoice);
    const result = detResultWin(playerChoice, pcChoice);
    setHasMadeChoice(true);
  }

  return (
    <div className="App">
      <Titulo />
      <UserInput 
        userName={userName} 
        setUserName={setUserName} 
        setIsUsernameValid={setIsUsernameValid}
      />
      <Score 
        userName={userName} 
        userScore={userScore} 
        pcScore={pcScore}
      />
      {hasMadeChoice && (
        <ResultMatch 
          playerChoice={playerChoice} 
          pcChoice={pcChoice} 
          userName={userName}
        />
      )}
      <BtnReset />
      <BtnChoices 
        onPlayerChoice={handlePlayersChoice} 
        isUsernameValid={isUsernameValid}
        
      />
      <HistoryGames />
      <TotalGames />
    </div>
  );
}

export default App;