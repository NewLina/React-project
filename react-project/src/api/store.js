import { URLS } from "./constants";



export const deleteWord = (id) => {
    const deleteUrl=URLS.DELETE_WORD.replace(':id', id);
    return fetch(deleteUrl, {method: 'POST', headers:{'Content-Type':'application/json'}})
    .then((response)=>{
        if (!response.ok) {
            throw new Error('Something went wrong');
        }
    }) 
    .catch((e)=>{
        return <p>{e}</p>
    })
};

export const getAllWords = () => {
    return fetch(URLS.GET_ALL_WORDS)
    .then(response => {
        if (response.ok) { 
            return response.json();
        } else {
            throw new Error('Something went wrong ...');
        }
    })
};

export const addNewWord = (data) => {
    return fetch (URLS.ADD_WORD, {
        method: 'POST', 
        body: JSON.stringify(data)
    })
    .then (response => {
        if (response.ok) { 
            return response.json();
        } else {
            throw new Error('Something went wrong ...');
        }
    })
};

export const editWord = (id, data) => {
    return fetch (URLS.UPDATE_WORD.replace(':id', id), {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({...data, tags:"smth", tags_json:"[smth]"})
    })
    .then (response => {
        if (response.ok) { 
            return response.json();
        } else {
            throw new Error('Something went wrong ...');
        }
    })
}