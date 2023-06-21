import './flashcard.scss';
import {useState, forwardRef} from 'react';

const Flashcard = forwardRef((props, buttonReference) => {
    const {english, transcription, russian, countWords, id=0} = props;
    const [checked, setChecked] = useState(false);
    const handleChange = () => {
        setChecked(!checked);
    }
    

    

    return (
    <div className='flashcard' id={id}>
        <div className='flashcard__english'>{english}</div>
        <div className='flashcard__transcription'>{transcription}</div>
        <div className='flashcard__translation' onClick={handleChange} >
            {
                checked ? <div className='flashcard__russian'>{russian}</div> : <button ref={buttonReference} onClick={countWords} className='flashcard__button'>Проверить</button>
            }
        </div>
    </div>
    );
});
export default Flashcard;
