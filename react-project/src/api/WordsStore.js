import { URLS } from "./constants";
import {makeAutoObservable, runInAction} from 'mobx';


export default class WordsStore{
    data=[];
    error=null;
    isLoaded=false;
    isLoading=false;
    wordsLearned=0;

    constructor(){
        makeAutoObservable(this);
    }

    // deleteWord = (id) => {
    //     const deleteUrl=URLS.DELETE_WORD.replace(':id', id);
    //     return fetch(deleteUrl, {method: 'POST', headers:{'Content-Type':'application/json'}})
    //     .then((response)=>{
    //         if (!response.ok) {
    //             throw new Error('Something went wrong');
    //         }
    //     }) 
    //     .catch((e)=>{
    //         return <p>{e}</p>
    //     })
    // };
    
    getAllWords = () => {
        this.isLoading=true;
        return fetch(URLS.GET_ALL_WORDS)
        .then(response => {
            if (response.ok) { 
                return response.json();
            } else {
                throw new Error('Something went wrong ...');
            }
        })
        .then((response) => {
            runInAction(() => {
                this.data = response;
                this.isLoading=false;
            }
            )
        })
        .catch((error) =>{
            this.error=error;
            this.isLoading=false;
        });
    };
    
    // addNewWord = (data) => {
    //     return fetch (URLS.ADD_WORD, {
    //         method: 'POST', 
    //         body: JSON.stringify(data)
    //     })
    //     .then (response => {
    //         if (response.ok) { 
    //             return response.json();
    //         } else {
    //             throw new Error('Something went wrong ...');
    //         }
    //     })
    // };
    
    // editWord = (id, data) => {
    //     return fetch (URLS.UPDATE_WORD.replace(':id', id), {
    //         method: 'POST', 
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({...data, tags:"smth", tags_json:"[smth]"})
    //     })
    //     .then (response => {
    //         if (response.ok) { 
    //             return response.json();
    //         } else {
    //             throw new Error('Something went wrong ...');
    //         }
    //     })
    // }

    countWords = () => {
        let learnedWords=this.wordsLearned;
    
        if (learnedWords !== this.data.length) {
            this.wordsLearned = this.wordsLearned + 1;
        }
    };
}

