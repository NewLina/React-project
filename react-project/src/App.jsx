import './App.scss';
import WordList from './components/WordList/WordList';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Search from './components/Search/Search';
import CardSlider from './components/CardSlider/CardSlider';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';


function App() {
  return (
    <Router>
      <>
      <Header></Header>
        <main className='main'>
        <Routes>
          <Route path="/game" element={<CardSlider/>}/>;
          <Route path="/" element={<WordList/>} />;
        </Routes>
        </main>
      <Footer></Footer>
      </>
      </Router>
  );
}

export default App;
