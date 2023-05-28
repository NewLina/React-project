import './wordList.scss';
import Word from '../Word/Word';
import {dataList} from '../../data';

function WordList() {
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
                    dataList.map ((item) => {
                        return <Word key={item.id} {...item} />
                    })
                }
            </tbody>
        </table>
    );
}
export default WordList;