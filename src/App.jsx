import './App.css';
import Titulo from './Components/Titulo';
import InputText from './Components/InputText';
import Score from './Components/Score';
import ResultMatch from './Components/ResultMatch';
import BtnReset from './Components/BtnReset';
import BtnChoices from './Components/BtnChoices';
import HistoryGames from './Components/HistoryGames';
import TotalGames from './Components/TotalGames';


function App() {
  return (
    <div className="App">
      <Titulo />
      <InputText />
      <Score pj="3" pc="2"/>
      <ResultMatch />
      <BtnReset />
      <BtnChoices />
      <HistoryGames />
      <TotalGames />
    </div>
  );
}

export default App;

