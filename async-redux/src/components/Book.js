import React from 'react';
import {connect} from 'react-redux';
import Loader from 'react-loader-spinner';
import

const Book = props => {
    console.log(props);
  return ( <div>
        <h1>Bookish Folk, Find Your Next Book! 📚</h1>
        {!props.book && !props.isFetching && <p> Find your next Read! </p>}
        {props.isFetching && (<Loader type="ThreeDots" color="#somecolor" height={80} width={80} />)}
        {props.book && <p>{props.book.preview}{props.book.thumbnail_url}</p>}
        <button onClick={props.getBook}>New Book!</button>
    </div>
    )
}

const mapStateToProps = state => {
    return{
        book: state.book,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect(mapStateToProps, {getBook})(Book);