import React, { useState } from 'react';

// 강아지 버튼, 고양이 버튼 2개를 생성한다.
// 버튼을 눌렀을 때 각 울음소리가 나오도록 화면에 구현한다.
// 강아지 버튼을 누르면 멍멍이 화면에 출력되고,
// 고양이 버튼을 누르면 야옹이 화면에 출력된다.

const Sound = () => {   
    const [sound , setSound] = useState("");

    const onclickToDog = () => {
        setSound("멍멍")
    }

    const onclickToCat = () => {
        setSound("야옹")
    }

    return (
        <div>
            <button onClick={onclickToDog}>강아지 </button>  
            {sound}     
            <button onClick = {onclickToCat}>고양이 </button>
        </div>
    );
};

export default Sound;