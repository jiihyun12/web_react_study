import React from 'react';

// JSX는 if문을 사용할 수 없기 떄문에 삼항 연산자를 지원한다.
// 조건식 ?  참일 때 랜더링할 JSX : 거짓일 때 랜더링할 JSX
// 조건식 && 참일 때 랜더링 할 JSX, 거짓이면 아무것도 출력하지 않느다.
// false라는 값을 랜더링되지 않는다.


const Jsx04 = () => {
    const name = undefined || "함지현";  // 초기값
    const login = true;
    const guest = true;

    return (
        <div>
            {
                login && guest && ( 
                <div>
                    <h1>비회원으로 로그인 완료</h1>
                </div>
                )
            }
            {
                login ? (
                    <div>
                        <h1>
                            {name}님 환영합니다.
                        </h1>
                    </div>
                ) : (
                    <div>
                        <h1>
                            로그인 실패
                        </h1>
                    </div>
                )
            }
        
    </div>
    );
};

export default Jsx04;