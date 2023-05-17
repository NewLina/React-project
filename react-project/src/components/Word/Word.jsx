import '../WordList/wordList.scss';

const Word = (props) => {
    const {english, transcription, russian, isEdited} = props;
    if (isEdited) return (
        <tr className='table__item table__item__edited'>
            <td><input type="text" value={english}/></td>
            <td><input type="text" value={transcription}/></td>
            <td><input type="text" value={russian}/></td>
            <td><button className='button-save'>Save</button></td>
            <td><button className='button-cancel'>Cancel</button></td>
        </tr>
    )
    return (
        <tr className='table__item'>
            <td>{english}</td>
            <td>{transcription}</td>
            <td>{russian}</td>
            <td><button className='button-edit'>Edit</button></td>
            <td><button className='button-delete'>Delete</button></td>
        </tr>
    );
}
export default Word;