import './wordList.scss';
import Word from '../Word/Word';
import {useContext, useEffect} from 'react';
import dataContext from '../../dataContext';

function WordList() {

    let {data, setData, isLoading, isError, setLoading, setError} = useContext(dataContext);

//     const addNewWord = () => {
//     fetch(' http://itgirlschool.justmakeit.ru/api/words/add', {method: 'POST'})
//     .then(response => {
//     if (response.ok) { 
//         return response.json();
//     } else {
//         throw new Error('Something went wrong ...');
//     }
//   })
//     .then((response) => {
//     setData({...data=response, [e.currentTarget.name]: e.currentTarget?.value})
//     setLoading(false);
//     })
//     .catch((error) =>{
//     setError(error);
//     setLoading(false);
//     });
//         ;
//     }


    if (isLoading) {
        return <p>Loading ...</p>; 
    }
    if (isError) {
        return <p>{isError.message}</p>;
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
                        <th><input type="text" /></th>
                        <th><input type="text" /></th>
                        <th><input type="text" /></th>
                        <th><button className='add-btn'>Add</button></th>
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
}
export default WordList;