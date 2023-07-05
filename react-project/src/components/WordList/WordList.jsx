import './wordList.scss';
import Word from '../Word/Word';
import {useContext, useEffect} from 'react';
import dataContext from '../../dataContext';
import {dataList} from '../../data';

function WordList() {

    let {data, setData} = useContext(dataContext);
    
    

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
}
export default WordList;