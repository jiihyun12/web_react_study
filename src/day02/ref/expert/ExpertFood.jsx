// input에 각각 한국 음식과 영어 음식을 적고 추가 버튼을 누르면 화면에 출력(체크박스로)
// 체크박스 선택하고 삭제 버튼 누르면 삭제

 import React, { useRef, useState } from 'react';

const ExpertFood = () => {

    const [food, setFood] = useState([]); 
    const [check, setCheck] = useState([]);
    const inputRef = useRef([]);
  
    // 음식 추가
    const onClickToAddFood = () => {
        setFood( 
            food.concat({ 
              kor : inputRef.current[0].value, 
              eng : inputRef.current[1].value,
            })
        )
    }


      

    return (


        <div>
            <div>
              <input ref={(el) => { inputRef.current[0] = el }} type="text" placeholder='한국 음식'/>
              <input ref={(el) => { inputRef.current[1] = el }} type="text" placeholder='eng'/>
            </div>
            <div>
              <button onClick={onClickToAddFood}>추가</button>
              <button >삭제</button>
            </div>
            <div>
              {food} 
            </div>
        </div>

    );
};

export default ExpertFood;



    

    







