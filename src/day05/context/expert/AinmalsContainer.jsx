import React from 'react';
import Animals from './Animals';
import { AnimalsProvider } from './AnimalsContext';

// provider로 context 제공
const AinmalsContainer = () => {
    return (
        <AnimalsProvider>
            <Animals />
        </AnimalsProvider>
    );
};

export default AinmalsContainer;