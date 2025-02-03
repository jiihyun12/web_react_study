import React from 'react';
import ChildContainer from './ChildContainer';
import { FontSizeProvider } from './FontContext';

const ParentContainer = () => {
    return (
        <FontSizeProvider>
            <ChildContainer /> 
        </FontSizeProvider>
    );
};
// ChildContainer 컴포넌트를 렌더링하고 있다. 이때 FontSizeProvider 컴포넌트로 감싸서 하위 컴포넌트에 제공할 값을 설정한다.

export default ParentContainer;