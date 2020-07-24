import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increase, decrease } from '../store/counter';

const Counter = () => {
    const number = useSelector(store => store.counter.number);
    const setNumber = useDispatch();

    return (
        <div>
            <h1>
                {number}
            </h1>
            <div>
                <button onClick={() => setNumber(increase())}>+1</button>
                <button onClick={() => setNumber(decrease())}>+1</button>
            </div>
        </div>
    );
};

export default Counter;