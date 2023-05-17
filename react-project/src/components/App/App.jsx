import './App.scss';
import WordList from '../WordList/WordList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Flashcard from '../Flashcard/Flashcard';
import Search from '../Search/Search';
import dataList from '../../data';


function App() {
  return (
    <>
    <Header></Header>
    <main className='main'>
      <WordList></WordList>
      <section className='flashcards-container'>
        <Flashcard {...dataList[0]} key={dataList[0].id}></Flashcard>
      </section>
    </main>
    <Footer></Footer>
    </>
  );
}

export default App;
