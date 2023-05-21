import '../WordList/wordList.scss';
import {useState} from 'react';

const Word = (props) => {
    const {english, transcription, russian} = props;
    const [isEdited, setIsEdited] = useState(false);
    const [data, setData] = useState({english, transcription, russian});
    const onEditFinished=()=>{
        setData({english:`new ${english}`, transcription, russian});
        setIsEdited(false);
    }
    const makeEdited = () => {
        setIsEdited(!isEdited);
    }
    if (isEdited) return (
        <tr className='table__item table__item__edited'>
            <td><input type="text" defaultValue={data.english}/></td>
            <td><input type="text" defaultValue={data.transcription}/></td>
            <td><input type="text" defaultValue={data.russian}/></td>
            <td><button className='button-save' onClick={onEditFinished}>Save</button></td>
            <td><button className='button-cancel' onClick={makeEdited}>Cancel</button></td>
        </tr>
    )
    return (
        <tr className='table__item'>
            <td>{data.english}</td>
            <td>{data.transcription}</td>
            <td>{data.russian}</td>
            <td><button className='button-edit' onClick={makeEdited}>Edit</button></td>
            <td><button className='button-delete'>Delete</button></td>
        </tr>
    );
}
export default Word;