import './cardSlider.scss';
import {useState} from 'react';
import Flashcard from '../Flashcard/Flashcard';
import {dataList} from '../../data';

function CardSlider(props) {
    const {cardIndex} = props;
    const [index, setIndex] = useState(cardIndex ? cardIndex : 0);

    const card=dataList.filter((item)=>{return item.id===index});
    return (
        <section className='flashcards-container'>
            <button className='button-arrow button-arrow-left' onClick={()=>{setIndex(index-1)}} disabled={index===0}><span className="material-symbols-outlined">
                arrow_back_ios_new
            </span></button>
                {card.map((data)=>{
                    return <Flashcard {...data} key={data.id}/>;
                    
                })
                }
            <button className='button-arrow button-arrow-right' onClick={()=>{setIndex(index+1)}} disabled={index===dataList.length-1}><span className="material-symbols-outlined">
                arrow_forward_ios
                </span></button>
        </section>
    )
}
export default CardSlider;