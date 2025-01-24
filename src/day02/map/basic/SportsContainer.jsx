import React from 'react';
import Sports from './Sports';

const SportsContainer = () => {

    const sportsList = [
        {
            name : "축구" , 
            member : 11
        },
        {
            name : "농구" , 
            member : 2
        },
        {
            name : "테니스" , 
            member : 4
        },
        {
            name : "야구" , 
            member : 9
        },
        {
            name : "배구" , 
            member : 6
        },
        ]
    

    return (
        <div>
            <ul>
                {sportsList.map((sports , i)=> <Sports key={i} sports={sports} /> )}  
                {/*반복이 돌고 있는 친구에게 유니크한 키값을 준다. (인덱스값)  */}
            </ul>
        </div>
    );
};

export default SportsContainer;