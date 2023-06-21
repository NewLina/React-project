import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Search from './components/Search/Search';
import {HomePage, ErrorPage, CardsPage} from './Pages/index';
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
          <Route path="/game" element={<CardsPage/>}/>;
          <Route end path="/" element={<HomePage/>} />;
          <Route path='*' element={<ErrorPage/>}></Route>
        </Routes>
        </main>
      <Footer></Footer>
      </>
      </Router>
  );
}

export default App;
