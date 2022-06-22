import React from 'react';

const GameComponent = ({num, visible}) => {
    return (
        <div 
        className='gameComponent-text'
        style={{display:`${visible}`}}
        >
            {num}
        </div>
    );
};

export default GameComponent;