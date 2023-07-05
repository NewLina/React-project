import './App.scss';
import React, {useState, useEffect} from 'react';
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
import dataContext from './dataContext';



function App() {

  let [data, setData] = useState([]);

  useEffect( () => {
    fetch('http://itgirlschool.justmakeit.ru/api/words')
    .then((response) => response.json())
    .then((response) => setData(data = response));
}, []);
  

  return (
    <dataContext.Provider value={{data, setData}}>
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
      </dataContext.Provider>
  );
}

export default App;
