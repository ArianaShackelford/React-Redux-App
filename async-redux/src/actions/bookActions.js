import axios from 'axios';

export const FETCH_BOOK_START = 'FETCH_BOOK_START';
export const FETCH_BOOK_SUCCESS = 'FETCH_BOOK_SUCCESS';
export const FETCH_BOOK_FAILURE = 'FETCH_BOOK_FAILURE';


export const getBook = () => dispatch => {
    dispatch({ type: FETCH_BOOK_START});
    axios
        .get('https://openlibrary.org/api/books?bibkeys=ISBN:0451526538&callback=mycallback')
        .then(res => {
            console.log(res)
            dispatch({type: FETCH_BOOK_SUCCESS, payload: res.data.value43})
        })
}