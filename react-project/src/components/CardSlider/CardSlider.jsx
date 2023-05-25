import './cardSlider.scss';
import {useState, useEffect} from 'react';
import Flashcard from '../Flashcard/Flashcard';
import dataList from '../../data';

function CardSlider(props) {
    const {cardIndex} = props;
    const [index, setIndex] = useState(cardIndex ? cardIndex : 0);
   
    return (
        <section className='flashcards-container'>
            <button className='button-arrow' ><span className="material-symbols-outlined">
                arrow_back_ios_new
            </span></button>
                {dataList.map((data)=>{
                    return <Flashcard {...data} key={data.id}/>;
                    
                })
                }
            <button className='button-arrow'  ><span className="material-symbols-outlined">
                arrow_forward_ios
                </span></button>
        </section>
    )
}
export default CardSlider;