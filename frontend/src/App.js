import './styles/App.css';
import MainPage from './Page/MainPage';
import Header from './components/Header';

function App() {
  return (
    <div className='container'>
      <Header/>
      <MainPage/>
    </div>
  );
}

export default App;
