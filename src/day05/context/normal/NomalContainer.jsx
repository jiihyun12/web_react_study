import React from 'react';
import Parent from './Parent';
import { FontSizeProvider } from './FontContext';

const NomalContainer = () => {
    return (
        <FontSizeProvider>
            <Parent />
        </FontSizeProvider>
    );
};

export default NomalContainer;