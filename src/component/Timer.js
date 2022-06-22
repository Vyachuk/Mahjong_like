import React from 'react';
import classes from './Timer.module.css'

const Timer = ({time}) => {
    const [counter, setCounter] = React.useState(time/1000);

    React.useEffect(() => {
        if(counter > 0){
            setTimeout(() => setCounter(counter - 1), 1000)
        }
        console.log(counter);
    }, [counter])
    return (
        <span className={classes.timer}>
          {counter > 0 && `${counter}` }
        </span>
    );
};

export default Timer;