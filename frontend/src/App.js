import './styles/App.css';
import ChartDatabase from './components/ChartDatabase';
import ChartGPT from './components/ChartNow';

function App() {
  return (
    <div className="App container center">
     <ChartGPT />
     <ChartDatabase />
    </div>
  );
}

export default App;
