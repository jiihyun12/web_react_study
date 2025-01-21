import React, { useState } from 'react';

const Counter = () => {
    const [number, setNumber] = useState(0) // 초기값 , 이 초기값은 number로 들어간다.
    const onClickToDecrease = () => {
        setNumber(number - 10)       
    }
    const onClickToIncrease = () => {
        setNumber(number + 10)
    }
    return (
        <div>
            <button onClick = {onClickToDecrease}>-</button>
            {number}
            <button onClick = {onClickToIncrease}>+</button>
        </div>
    );
};

export default Counter;