import React from 'react';

const Indication = ({indicate, field}) => {
    console.log(indicate, field);
    return (
        <div>
            Succesfull: <span>{field - indicate}</span> | Still left: <span>{indicate}</span>
        </div>
    );
};

export default Indication;