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
  let [isLoading, setLoading] = useState(false);
  let [isError, setError] = useState(null);

  useEffect( () => {

    setLoading(true);
    fetch('http://itgirlschool.justmakeit.ru/api/words')
    .then(response => {
      if (response.ok) { 
          return response.json();
      } else {
          throw new Error('Something went wrong ...');
      }
  })
    .then((response) => {
      setData(data = response);
      setLoading(false);
    })
    .catch((error) =>{
    setError(error);
    setLoading(false);
    });

}, []);
  

  return (
    <dataContext.Provider value={{data, setData, isLoading, setLoading, isError, setError}}>
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
