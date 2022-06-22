import React from 'react'
import classes from './Setting.module.css'

const Setting = ({setField}) => {
    const difficult = ['Easy', 'Middle', 'Hard'];
    const ulRef = React.useRef() 
    
    React.useEffect(() => {
        ulRef.current.addEventListener('click', e => selectLvl(e))
    }, [])

    const selectLvl = (e) => {
        switch (e.target.innerText) {
            case 'Easy':
                setField(20);
                break;
            case 'Middle':
                setField(40);
                break;
            case 'Hard':
                setField(60);
                break;
            default:
                break;
        }
    }
    return (
        <div className={classes.setting}>
            <h2>Select the difficulty</h2>
            <ul ref={ulRef}>
                {difficult.map(level => (
                    <li key={level}>{level}</li>
                ))}
            </ul>
        </div>
    );
};

export default Setting;