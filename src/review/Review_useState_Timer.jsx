
// 문제 : 타이머 만들기
// 화면에 1초마다 숫자가 증가하는 타이머를 표시하시오.
// "시작" 버튼을 누르면 타이머가 시작되고, "정지" 버튼을 누르면 멈추도록 구현하시오.
// "초기화" 버튼을 누르면 타이머가 0으로 리셋되도록 하시오.

// ==============================================================================================================================
// ==============================================================================================================================
//1. 빈 칸 채우기로 먼저 해보기
// import React, { ____, ____ } from "react";

// const Timer = () => {
//     const [time, setTime] = useState(____);
//     const [running, setRunning] = useState(____);

//     useEffect(() => {
//         if (!running) return;
//         const interval = setInterval(() => {
//             setTime(____);
//         }, ____);

//         return () => clearInterval(interval);
//     }, [____]);

//     return (
//         <div>
//             <h2>타이머: {time}초</h2>
//             <button onClick={() => setRunning(!running)}>
//                 {running ? "정지" : "시작"}
//             </button>
//             <button onClick={() => setTime(____)}>초기화</button>
//         </div>
//     );
// };

// export default Timer;


// ==============================================================================================================================
// ==============================================================================================================================
// 2.주석 달면서 이해하기

// import React, { useState, useEffect } from "react";

// const Timer = () => {
//     // 시간을 저장하는 상태
//     const [time, setTime] = useState(0);
//     // 타이머 실행 여부를 저장하는 상태
//     const [running, setRunning] = useState(false);

//     // useEffect를 사용하여 타이머가 실행중일때만 1초마다 증가
//     useEffect(() => {
//         if (!running) return; // 만약에 running이 false라면 타이머 실행 안 함
//         const interval = setInterval(() => { // setInterval은 일정한 시간 간격마다 특정 코드를 실행하는 JavaScript 내장 함수이다. 
                                                // setInterval(콜백함수, 실행할 간격);
//             setTime(prev => prev + 1); // 1초마다 time +1 증가
//         }, 1000);

//         return () => clearInterval(interval); // 컴포넌트 언마운트시 interval제거
//     }, [running]); // running값이 변경될때마다 실행

//     return (
//         <div>
//             <h2>타이머: {time}초</h2>
//             {/* 시작, 정지 버튼 */}
//             <button onClick={() => setRunning(!running)}>
//                 {running ? "정지" : "시작"}    {/* running값에 따라 버튼 내용 변경 */}
//             </button>
//             {/* 초기화 버튼 */}
//             <button onClick={() => setTime(0)}>초기화</button>
//         </div>
//     );
// };

// export default Timer;




// ==============================================================================================================================
// ==============================================================================================================================
// 3.주석만 보고 해보기

import React, { useEffect, useState } from 'react';

const Timer = () => {
// 시간을 저장하는 상태
const [time, setTime] = useState();
// 타이머 실행 여부를 저장하는 상태
const [run, setRun] = useState();

// useEffect를 사용하여 타이머가 실행중일때만 1초마다 증가
useEffect(()=>{
    if(!run) return;
    const interval = setInterval(()=>{
        setTime((time)=>time+1)
    },1000)

    return () => clearInterval(interval)
}, [run])
// 만약에 run이 false라면 타이머 실행 안 함
// 1초마다 time +1 증가
// 컴포넌트 언마운트시 interval제거
// run값이 변경될때마다 실행
return (
    /* 시작, 정지 버튼 */
    /* running값에 따라 버튼 내용 변경 */
    /* 초기화 버튼 */
    <div>
        <h2>타이머:{time}초</h2>
        <button onClick={()=>setRun(!run)}> {run?"시작":"정지"}
        </button>
        <button onClick={()=> setTime(0)}>
            초기화
        </button>
    </div>
);
};
 
 export default Timer;

// ==============================================================================================================================
// ==============================================================================================================================
// 4.혼자 해보기