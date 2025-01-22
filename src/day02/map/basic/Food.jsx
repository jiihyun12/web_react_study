import React from 'react';

const Food = ({foods}) => {
  const { name, price, mou } = foods;
  return (
    <li>
      <p>판매음식 : {name}</p>
      <p>가격 : {price.toLocaleString()}원</p>
      <p>원산지 : {mou.map((coa,i,origin)=> i === origin.length -1 ? coa : coa + ",")} </p>
    </li>
  );
};

export default Food;