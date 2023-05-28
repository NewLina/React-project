import './App.scss';
import WordList from './components/WordList/WordList';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Search from './components/Search/Search';
import CardSlider from './components/CardSlider/CardSlider';


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
