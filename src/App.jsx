import './App.css';
import { useState } from 'react';
import Titulo from './Components/Titulo';
import UserInput from './Components/UserInput';
import Score from './Components/Score';
import ResultMatch from './Components/ResultMatch';
import BtnReset from './Components/BtnReset';
import BtnChoices from './Components/BtnChoices';
import HistoryGames from './Components/HistoryGames';
import TotalGames from './Components/TotalGames';


function App() {
  const [userName, setUserName] = useState('');

  return (
    <div className="App">
      <Titulo />
      <UserInput userName={userName} setUserName={setUserName} />
      <Score userName={userName} />
      <ResultMatch />
      <BtnReset />
      <BtnChoices />
      <HistoryGames />
      <TotalGames />
    </div>
  );
}

export default App;

