import React from 'react';
import {connect} from 'react-redux';
import Loader from 'react-loader-spinner';
import {getAdvice} from '../actions';

const Book = props => {
    console.log(props);
  return ( <div>
        <h1>Random Advice Generator</h1>
        {!props.advice && !props.isFetching && <p> Find me some advice! </p>}
        {props.isFetching && (<Loader type="ThreeDots" color="#somecolor" height={80} width={80} />)}
        {props.advice && <p>{props.advice}</p>}
        <button onClick={props.getAdvice}>More Advice!</button>
    </div>
    )
}

const mapStateToProps = state => {
    return{
        advice: state.slip,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect(mapStateToProps, {getAdvice})(Book);