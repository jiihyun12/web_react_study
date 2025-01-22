import React, { useState } from 'react';


// 체크 박스 버튼을 누르면 홤녀에 누른 값의 문자열이 출력된다.
// 체크박스의 버튼이 해제되면 화면에 누른 값이 사라지도록 구현하기
// ex) front-end back-end
// 체크박스의 버튼이 해제되면 화면에 누른 값이 사라지도록 구현하기

const CheckMessage = () => {

   
    const [message, setMessage] = useState([]);

    // const onClickToCheck = () => {      
    //         if(e.target.checked){ 
    //             setMessage(message.concat(e.target.value)) 
    //         } 
    //     }

    
        const onClickToCheck = (e) => { 
            let value = e.target.value; 
            if(e.target.checked){ 
                setMessage(message.concat(e.target.value))                        
            }else{
                setMessage(message.filter((m)=>m !== value))
            }                                            
        };


    return (
        <div>
            <div>
                <span>front-end</span>
                <input type="checkbox" value="front-end" onClick={onClickToCheck} />
            </div>
            <div>
                <span>back-end</span>
                <input type="checkbox" value="back-end" onClick={onClickToCheck} />
            </div>
            <div>
                <span>ai</span>
                <input type="checkbox" value="ai" onClick={onClickToCheck} />
            </div>

            <div>
                {message.map((message,i)=> <p key={i}>{message}</p>)}
            </div>
        </div>
    );
};

export default CheckMessage;





