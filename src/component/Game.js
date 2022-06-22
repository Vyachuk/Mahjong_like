import React, {useState} from 'react';
import GameComponent from './GameComponent';
import './Game.module.css'
import Timer from './Timer';
import Indication from './Indication';

const Game = ({field, setField}) => {
    const [numbers, setNumbers] = useState([]);
    const [visible, setVisible] = useState('block');
    const [timeToStart] = useState(7000);
    const [indication, setIndication] = useState(field)

    const ulRef = React.useRef() 
    let equalArr = {}

    React.useEffect(() => {
        let arr = [];
        for(let i = 0; i < indication/2; i++) {
            arr.push(Math.round(Math.random() * 100))
        }
        let newArr = arr.concat(...arr)
        newArr.sort(() => Math.random() - 0.5);

        setNumbers([...numbers, ...newArr])
        setTimeout(() => {
            setVisible('none')
            ulRef.current.addEventListener('click', e => openCart(e))
        }, timeToStart)
    }, [])

    React.useEffect(() => {
        if(indication === 0) setField(null);
    }, [indication])

    const openCart = (e) => {
        if(e.target.nodeName === 'LI'){
            if(!equalArr.first) {
                equalArr = {...equalArr ,first: e.target.firstChild.innerText, firstTag: e.target}
            }
            else {
                equalArr = {...equalArr ,second: e.target.firstChild.innerText}
                if(equalArr.first !== equalArr.second){
                    setTimeout(() => {
                        e.target.firstChild.style.display = 'none';
                        equalArr.firstTag.firstChild.style.display = 'none';
                        equalArr = {};
                    }, 300)
                    
                } else {
                    setIndication(val => val - 2)
                    e.target.style.boxShadow = equalArr.firstTag.style.boxShadow = 'inset 0px 0px 12px rgba(36, 155, 60, 1)';
                    equalArr = {};
                }
            }
            e.target.firstChild.style.display = 'block'
        }
    }

    return (
        <div className='game-app'>
            {visible !== 'none' && <Timer time={timeToStart}/>}
            {visible === 'none' && <Indication indicate={indication} field={field}/>}
            <ul ref={ulRef}>
            {numbers.map((num, i) => (
                <li key={i}>
                    <GameComponent num={num} visible={visible} />
                </li>
            ))}
            </ul>
            
        </div>
    );
};

export default Game;