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
import { Provider } from 'mobx-react';
import WordsStore from './api/WordsStore';

const store={
  wordsStore: new WordsStore()
};

function App() {
  return (
    <Provider {...store}>
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
      </Provider>
  );
}

export default App;
