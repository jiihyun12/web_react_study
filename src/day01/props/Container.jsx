import React from 'react';
import Component03 from './Component03';
import Component04 from './Component04';
// import Component01 from './Component01';
// import Component02 from './Component02';

// box 3개를 만들고 가로로 배치하기
// 단 box의 크기는 넓이 100px, 높이 100px, 백그라운드 컬러는 오렌지이다
// 모든 변수는 컨테이너에서 선언한다.

const Container = () => {

    // 버튼을 눌렀을 때 
// 컨테이너에서 함수와 이름을 받아서 
// 콘솔에 출력하기
// 1. 함수는 어떤 값을 받으면 콘솔에 출력해주는 함수
// 2. 이름은 본인 이름의 변수
  const name = "함지현";

  const getValue = (value) => {
    console.log(value)
  }
  getValue("안녕하세요")

  const buttonStyle = {
    width : "200px",
    height : "100px"
  }


  return (
    <div>
     <Component04 name={name} buttonStyle={buttonStyle} />
    </div>
  );
};

export default Container;