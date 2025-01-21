import React, { useState } from 'react';

// 빨간색 버튼을 누르면 글자색을 빨갛게
// 파란색 버튼을 누르면 글자색을 파랗게
// 핑크색을 입력하면 글자의 색깔을 없앤다.


const Colors = () => {

    const [colors, setColors] = useState("");
    const [result, setResult] = useState("");

    const onclickToRed = () => {
        setColors("red")
    }

    const onclickToBlue = () => {
        setColors("blue")
    }

    

    const changeInput = (e) => {
       setResult(e.target.value);
       if(e.target.value === "핑크색"){
        setColors("")
       }
    }



  return (
    <div>
      <p style = {{color : colors}}>{result}</p>
      <input type="text" placeholder='글자를 입력해주세요' onChange={changeInput}/>
      <button onClick={onclickToRed}>빨간색</button>
      <button onClick={onclickToBlue}>파란색</button>
    </div>
  );
};





export default Colors;