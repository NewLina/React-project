import './cardSlider.scss';
import {useState, useEffect, useRef} from 'react';
import Flashcard from '../Flashcard/Flashcard';
import {dataList} from '../../data';

function CardSlider(props) {
    const {cardIndex} = props;
    const [index, setIndex] = useState(cardIndex ? cardIndex : 0);
    const [wordsLearned, setWordsLearned] = useState(0);

const countWords = () => {
    let learnedWords=wordsLearned;

    if (learnedWords !== dataList.length) {
        setWordsLearned(learnedWords => learnedWords + 1);
    }
};

const card=dataList.filter((item)=>{return item.id===index});

const buttonReference = useRef();

useEffect(() => {
    buttonReference.current.focus();
    console.log(buttonReference.current);
}, [])

    
    return (
        <>
        <section className='flashcards-container'>
            <button className='button-arrow button-arrow-left' onClick={()=>{setIndex(index-1)}} disabled={index===0}><span className="material-symbols-outlined">
                arrow_back_ios_new
            </span></button>
                {card.map((data)=>{
                    return <Flashcard {...data} key={data.id} countWords={countWords} ref={buttonReference} />;
                    
                })
                }
            <button className='button-arrow button-arrow-right' onClick={()=>{setIndex(index+1)}} disabled={index===dataList.length-1}><span className="material-symbols-outlined">
                arrow_forward_ios
                </span></button>
        </section>
        <p className='word-counter'>Words learned : {wordsLearned}/{dataList.length}</p>
        </>
    )
}
export default CardSlider;