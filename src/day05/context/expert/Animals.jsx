import React, { useContext } from 'react';
import { AnimalsContext } from './AnimalsContext';

// context에 저장된 동물 세 마리를 버튼으로 출력
    // 버튼 세 개 생성
    
// input에 동물을 입력 후 엔터 : 동물 추가
    // input에 KeyUp 이벤트 사용

// 동물 버튼을 클릭하면 해당 버튼을 삭제

// 각 context에 선언된 insert, remove의 action을 사용한다.

const Animals = () => {
    const {state, action} = useContext(AnimalsContext);
    const {animals} = state;
    const {setAnimals} = action;
    console.log(animals)

    // const onClickToRemove = () => {
    //     setAnimals( animals.filter((animal, i) => i !== i));
    // }

    const onClickToRemove = (e) => {
        setAnimals( animals.filter((animal) => animal !== e.target.innerText));
    }


    return (
        <div>
            {animals.map((animal, i) => {   
                return <button key={i} onClick={onClickToRemove}>{animal}</button> // 돔으로 return
            })}
           {/* <button onClick={onClickToRemove}>누렁이</button>
           <button onClick={onClickToRemove}>점박이</button>
           <button onClick={onClickToRemove}>얼룩이</button>    */}

           <input type="text" placeholder='동물 이름을 입력해주세요' onKeyUp={(e)=>{
               if(e.key === "Enter"){
                   setAnimals([...animals, e.target.value])}}}  
                   // input에 입력한 글자를 들고 와야 한다.
                   // 
           />
        </div>
    );
};

export default Animals;