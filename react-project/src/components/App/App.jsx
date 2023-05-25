import './App.scss';
import WordList from '../WordList/WordList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
//import Flashcard from '../Flashcard/Flashcard';
import Search from '../Search/Search';
//import dataList from '../../data';
import CardSlider from '../CardSlider/CardSlider';


function App() {
  return (
    <>
    <Header></Header>
    <main className='main'>
      <WordList></WordList>
      <CardSlider ></CardSlider>
    </main>
    <Footer></Footer>
    </>
  );
}

export default App;
