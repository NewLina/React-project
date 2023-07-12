import './wordList.scss';
import Word from '../Word/Word';
import {inject, observer} from 'mobx-react';
import {useEffect} from 'react';

function WordList({data, isLoading, error}) {

    
    if (isLoading) {
        return <p>Loading ...</p>; 
    }
    if (error) {
        return <p>{error}</p>;
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
const {data, getAllWords, isLoaded, isLoading, error} = wordsStore;
useEffect( () => {
    if(!isLoaded) {
        getAllWords();
    }
},[])
return {
    data, getAllWords, isLoaded, isLoading, error
};
}) (observer(WordList));