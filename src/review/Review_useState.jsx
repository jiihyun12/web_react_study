
// 문제: 체크박스 선택 상태 관리
// 3개의 체크박스(Front-end, Back-end, AI)를 만들고, 사용자가 체크한 값만 화면에 표시되도록 구현하기
// 체크를 해제하면 해당 값은 화면에서 사라져야 한다.
// ==============================================================================================================================
// ==============================================================================================================================
//1. 빈 칸 채우기로 먼저 해보기

// import React, { ____ } from "react";  // (1) 필요한 React Hook 불러오기

// const CheckMessage = () => {
//     const [message, setMessage] = useState(____); // (2) 상태(state) 만들기 (초기값은 빈 배열)

//     const onClickToCheck = (e) => { 
//         let value = e.target.value; 
//         if (e.target.checked) { 
//             setMessage(____); // (3) 체크된 값을 상태에 추가하기
//         } else {
//             setMessage(____); // (4) 체크 해제 시 해당 값 삭제하기
//         }                                            
//     };

//     return (
//         <div>
//             {/* (5) 체크박스 UI 만들기 */}
//             <div>
//                 <span>Front-end</span>
//                 <input type="checkbox" value="Front-end" onClick={____} />
//             </div>
//             <div>
//                 <span>Back-end</span>
//                 <input type="checkbox" value="Back-end" onClick={____} />
//             </div>
//             <div>
//                 <span>AI</span>
//                 <input type="checkbox" value="AI" onClick={____} />
//             </div>

//             {/* (6) 선택한 값 화면에 표시하기 */}
//             <div>{message.join(", ")}</div>
//         </div>
//     );
// };

// export default CheckMessage;


// ==============================================================================================================================
// ==============================================================================================================================
//2. 주석 달면서 이해하기

// import React, { useState } from 'react';
// // 컴포넌트에서 상태 관리를 위해 필요한 훅함수 불러오기

// // 함수형 컴포넌트 생성
// const CheckValue = () => {
    
//     const [message, setMessage] = useState([]);
//     // message 값을 업데이트할 수 있는 상태 변수 만들기

// // 체크박스 클릭 시 실행될 함수 정의
// const onClickToBox = (e) => {
//     // 클릭된 체크박스에서 필요한 값 가져오기
//     let value = e.target.value;
//     // 체크가 되어 있으면 실행할 코드
//     if(e.target.checked){
//         //상태를 최신 상태로 유지하려면 콜백 함수로 업데이트하는 것이 좋음.
//         setMessage((prev)=>[...prev,value]) // 기존 message 배열에 새 값을 추가하여 업데이트하기
//         // 콘솔에 출력
//     } else{
//         // 체크가 해제되었을 때 실행할 코드
//         // 현재 message 배열에서 선택 해제된 값을 제거하기
//         setMessage(message.filter((data)=>data !== value))
//         // 콘솔에 출력
//     }
// }


// return (
//         /* 체크박스를 포함한 UI 구성 */
//         /* 'Front-end'라는 value 값을 가진 체크박스 생성 */
//         /* 'Back-end'라는 value 값을 가진 체크박스 생성 */
//         /* 'AI'라는 value 값을 가진 체크박스 생성 */
//         /* 선택된 체크박스의 값을 화면에 표시 */
//         <div>
//             <div>
//             <input type="checkBox" value={"Front-end"} onChange={onClickToBox} />  
//             {/* input type="checkbox"에서는 onClick보다 onChange가 적절 */}
//             {/* onClick을 사용하면 빠르게 연속 클릭할 때 예상치 못한 동작이 발생할 수 있음. */}
//             <span>Front-end</span>
//             </div>
//             <div>
//             <input type="checkBox" value={"Back-end"} onChange={onClickToBox} />
//             <span>Back-end</span>
//             </div>
//             <div>
//             <input type="checkBox" value={"AI"} onChange={onClickToBox} />
//             <span>AI</span>
//             </div>
//             <h2>{message.join(",")}</h2>
//         </div>
//     );
// };

// export default CheckValue;



// ==============================================================================================================================
// ==============================================================================================================================
//3. 주석만 보고 해보기

// (1) 컴포넌트에서 상태 관리를 위해 필요한 useState Hook을 불러온다.(React에서)
// (2) 함수형 컴포넌트를 생성한다.
// (3) 상태(state) 변수 message를 만든다. 초기값은 빈 배열([]).
    // setMessage를 이용해 message 값을 업데이트할 수 있다.
// (4) 체크박스 클릭 시 실행될 함수를 정의한다.
// (5) 클릭된 체크박스의 value 값을 가져온다.
// (6) 체크가 되어 있으면 실행할 코드
// (7) 기존 message 배열에 새 값을 추가하여 업데이트한다.
// (8) 체크된 값을 콘솔로 출력한다.
// (9) 체크가 해제되었을 때 실행할 코드
// (10) 현재 message 배열에서 선택 해제된 값을 제거한다.
// (11) 체크 해제된 후의 message 배열을 콘솔에 출력한다.

// import React, { useState } from 'react';


// const OutputCheckMessage = () => {

//     const[message,setMessage] = useState([]);

//     const onChacngeToValue = (e) => {
//        let value = e.target.value;
//        console.log(value)
//        if(e.target.checked){
//         setMessage((prev)=>[...prev,value])
//        }else{
//         setMessage(message.filter((data)=>data !== value))
//        }
//     }

//     return (
//         /* (12) 체크박스를 세 개 생성한다. */
//         /* (13) 선택된 체크박스의 값을 화면에 표시한다. */

//         <div>
//             <input type="checkBox" value={"Front-end"} onChange={onChacngeToValue} />
//             <span>Front-end</span>
//             <input type="checkBox" value={"Back-end"} onChange={onChacngeToValue} />
//             <span>Back-end</span>
//             <input type="checkBox" value={"AI"} onChange={onChacngeToValue} />
//             <span>AI</span>
//             <div>
//                 {message.join(", ")}
//             </div>
//         </div>
//     );
// };

// export default OutputCheckMessage;


// ==============================================================================================================================
// ==============================================================================================================================
// 4.혼자 해보기

import React, { useState } from 'react';


const OutputCheckMessage = () => {

    const[message,setMessage] = useState([]);

    const onChacngeToValue = (e) => {
       let value = e.target.value;
       console.log(value)
       if(e.target.checked){
        setMessage((prev)=>[...prev,value])
       }else{
        setMessage(message.filter((data)=>data !== value))
       }
    }

    return (
        <div>
            <input type="checkBox" value={"Front-end"} onChange={onChacngeToValue} />
            <span>Front-end</span>
            <input type="checkBox" value={"Back-end"} onChange={onChacngeToValue} />
            <span>Back-end</span>
            <input type="checkBox" value={"AI"} onChange={onChacngeToValue} />
            <span>AI</span>
            <div>
                {message.join(", ")}
            </div>
        </div>
    );
};

export default OutputCheckMessage;