// name과 age를 입력 후 화면에 랜더링 시키기

import React from 'react';

const Jsx03 = () => {
    const name = "함지현";
    const age = 10;
    return (
        <div>
            저의 이름은 {name}이고, 나이는{age}살 입니다.
        </div>
    );
};

export default Jsx03;