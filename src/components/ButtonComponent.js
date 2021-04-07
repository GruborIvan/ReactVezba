import React from 'react';
import { useDispatch } from 'react-redux';
import { getNews } from '../store/actions/index';

const ButtonComponent = ({onNextClick,onPreviousClick}) => {

    const dispatch = useDispatch();

    const onBtnClick = () => {
        dispatch(getNews());
    };

    return (<div style={{marginLeft: 500, marginTop: 30}}> 
        <button className="ui secondary button" onClick={() => onPreviousClick()}> Previous article </button>
        <button className="ui primary button" onClick={onBtnClick}> Press to see news </button>
        <button className="ui secondary button" onClick={() => onNextClick()}> Next article </button>
    </div>);

};

export default ButtonComponent;