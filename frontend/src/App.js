import './styles/App.css';
import MainPage from './Page/MainPage';
import { CHART_1, CHART_2, CHART_3, CHART_4 } from './utils/consts';
import { Link } from 'react-router-dom';


function App() {
  return (
    <div className="App container center">
      <Link to={CHART_1}>Graph1</Link> 
      <Link to={CHART_2}>Graph2</Link> 
      <Link to={CHART_3}>Graph3</Link> 
      <Link to={CHART_4}>Graph4</Link> 
      <MainPage/>
    </div>
  );
}

export default App;
