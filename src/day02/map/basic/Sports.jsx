import React from 'react';

const Sports = ({Sports}) => {
    const {name, member} = Sports;
    return (
        <div>
            <li> 종목 : {name}</li>
            <li> 인원 : {member}</li>
        </div>
    );
};

export default Sports;