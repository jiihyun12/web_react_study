import React from 'react';
import CharContext from './CharContext';

const C = () => {
    return (
        <div>
            <CharContext.Consumer>
                {
                    (context)=> <p style={{color : context.color}}>리액트 Context</p> // context.color
                }
            </CharContext.Consumer>
        </div>
    );
};

export default C;