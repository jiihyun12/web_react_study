// 컨텍스트 생성 및 초기화
// provider 생성
// animals 초기값 ["누렁이", "점박이", "얼룩이"]
// insert, remove 
// context, provider 내보낸다.

import React, { createContext } from 'react';

const AnimalsContext = createContext({
    state : {animals : []},
    action : {insert : () => {}, remove : () => {}}
});

const AnimalsProvider = ({children}) => {
    const [animals, setAnimals] = React.useState(["누렁이", "점박이", "얼룩이"])
    // console.log(animals)
    const value = {
        state : {animals}, action : {setAnimals}    
    }

    return(
        <AnimalsContext.Provider value={value}>
            {children}
        </AnimalsContext.Provider>
    )
}

const AnimalsConsumer = AnimalsContext.Consumer;

export {AnimalsContext, AnimalsProvider, AnimalsConsumer}; 


