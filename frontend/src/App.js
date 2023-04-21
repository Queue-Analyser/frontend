import styles from './styles/App.module.css'
import MainPage from './pages/MainPage';
import Header from './components/Header';

function App() {
  return (
    <div className={styles.container}>
      <Header/>
      <MainPage/>
    </div>
  );
}

export default App;
