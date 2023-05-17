import './wordList.scss';
import Word from '../Word/Word';
import dataList from '../../data';

function WordList() {
    let isEdited=false;
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
                        return <Word key={item.id} {...item} isEdited={isEdited} />
                    })
                }
            </tbody>
        </table>
    );
}
export default WordList;