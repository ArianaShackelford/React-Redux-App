import {
    FETCH_BOOK_START,
    FETCH_BOOK_SUCCESS,
    FETCH_BOOK_FAILURE,
} from '../actions';

const initialState = {
    book: null,
    isFetching: false,
    error: ''
};

const reducer = (state = initialState, action) => {
    console.log( action)
    switch (action.type) {
        case FETCH_BOOK_START:
            return{
                ...state,
                isFetching: true
            };
        case FETCH_BOOK_SUCCESS:
                return{
                    ...state
                
                };
        case FETCH_BOOK_FAILURE:
                return{
                    ...state
                };
        default:
            return state;
    }
}

export default reducer;