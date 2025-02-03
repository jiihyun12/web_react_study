// 문제
// useMemo를 활용하여 수량과 쿠폰 값 연산 최적화
// useCallback을 사용하여 버튼 클릭 시 함수 메모이제이션 적용
// 다크모드 버튼 추가 및 GlobalStyle 활용

// ==============================================================================================================================
// ==============================================================================================================================
//1. 빈 칸 채우기로 먼저 해보기
// import React, { useState, useMemo, useCallback } from 'react';

// const ProductContainer = () => {
//     const [quantity, setQuantity] = useState(1);
//     const pricePerItem = 5000;

//     // useMemo를 사용하여 총 가격 계산 최적화
//     const totalPrice = useMemo(() => {
//         return ____
//     }, [____]);

//     // useCallback을 사용하여 버튼 핸들러 최적화
//     const increaseQuantity = useCallback(() => {
//         setQuantity(____);
//     }, [____]);

//     const decreaseQuantity = useCallback(() => {
//         setQuantity(____);
//     }, [____]);

//     return (
//         <div>
//             <h2>상품 수량: {quantity}</h2>
//             <h3>총 가격: {totalPrice}원</h3>
//             <button onClick={increaseQuantity}>+</button>
//             <button onClick={decreaseQuantity}>-</button>
//         </div>
//     );
// };

// export default ProductContainer;


// ==============================================================================================================================
// ==============================================================================================================================
// 2.주석 달면서 이해하기

import React, { useState, useMemo, useCallback } from 'react';

const ProductContainer = () => {
    const [quantity, setQuantity] = useState(1);
    const pricePerItem = 5000;

    const totalPrice = useMemo(() => {
        return quantity * pricePerItem;
    }, [quantity]);

    const increaseQuantity = useCallback(() => {
        setQuantity(prev => prev + 1);
    }, []);

    const decreaseQuantity = useCallback(() => {
        setQuantity(prev => prev - 1);
    }, []);

    return (
        <div>
            <h2>상품 수량: {quantity}</h2>
            <h3>총 가격: {totalPrice}원</h3>
            <button onClick={increaseQuantity}>+</button>
            <button onClick={decreaseQuantity}>-</button>
        </div>
    );
};

export default ProductContainer;



// ==============================================================================================================================
// ==============================================================================================================================
// 3.주석만 보고 해보기


// ==============================================================================================================================
// ==============================================================================================================================
// 4.혼자 해보기
