import './wordList.scss';
import Word from '../Word/Word';
import {inject, observer} from 'mobx-react';
import {useEffect, useRef} from 'react';
import { v4 as uuidv4 } from 'uuid';

function WordList({data, isLoading, error, addNewWord}) {
    let inputTranscription = useRef(null);
    let inputEnglish = useRef(null);
    let inputRussian = useRef(null);
    
    if (isLoading) {
        return <p>Loading ...</p>; 
    }
    if (error) {
        return <p>{error}</p>;
    }

    const onAddClick = () => {
        addNewWord({
            id: uuidv4(),
            english: inputEnglish.current.value,
            transcription: inputTranscription.current.value,
            russian: inputRussian.current.value
        });
    }

    return (
        <table className='table'>
            <caption className='heading'>List of Words</caption>
            <thead>
                <tr className='table__heading'>
                    <th>English</th>
                    <th>Transcription</th>
                    <th>Russian</th>
                    <th></th>
                </tr>
                <tr className='table__add-word'>
                        <th><input type="text" ref={inputEnglish} /></th>
                        <th><input type="text" ref={inputTranscription}/></th>
                        <th><input type="text" ref={inputRussian}/></th>
                        <th><button onClick={onAddClick} className='add-btn'>Add</button></th>
                </tr>
            </thead>
            <tbody className='table__content'>
                {
                    data.map ((item) => {
                        return <Word key={item.id} {...item} />
                    })
                }
            </tbody>
        </table>
    );
};

export default inject (({wordsStore})=>{
const {data, getAllWords, isLoaded, isLoading, error, addNewWord} = wordsStore;
useEffect( () => {
    if(!isLoaded) {
        getAllWords();
    }
},[])
return {
    data, getAllWords, isLoaded, isLoading, error, addNewWord
};
}) (observer(WordList));