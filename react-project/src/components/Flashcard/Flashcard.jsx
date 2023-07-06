import './flashcard.scss';
import {useState} from 'react';

const Flashcard = (props) => {
    const {english, transcription, russian, countWords, i=0} = props;
    const [checked, setChecked] = useState(false);
    const handleChange = () => {
        setChecked(!checked);
    }
    

    

    return (
    <div className='flashcard' id={i}>
        <div className='flashcard__english'>{english}</div>
        <div className='flashcard__transcription'>{transcription}</div>
        <div className='flashcard__translation' onClick={handleChange} >
            {
                checked ? <div className='flashcard__russian'>{russian}</div> : <button onClick={countWords} className='flashcard__button'>Проверить</button>
            }
        </div>
    </div>
    );
};
export default Flashcard;
