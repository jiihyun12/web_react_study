import React from 'react';
import Food from './Food';

const FoodContainer = () => {

  const foodList = [
    {
      name : "돈까스",
      price : 15000,
      mou : ["국내산", "호주산"]
    },
    {
      name : "떡볶이",
      price : 5000,
      mou : ["우리집", "옆집"]
    },
    {
      name : "초밥",
      price : 15000,
      mou : ["국내산", "미국산"]
    },
    {
      name : "치킨",
      price : 30000,
      mou : ["국내산", "일본산"]
    },
  ]

  // footList의 내용을 화면에 모두 뿌리기
  // ex)
  // 판매음식 : "돈까스"
  // 가격 : 15000원
  // 원신지 : 국내산, 호주산

  return (
    <div>
      <ul>
        {foodList.map((foods, i) => <Food key={i} foods={foods} />)}
      </ul>
    </div>
  );
};

export default FoodContainer;