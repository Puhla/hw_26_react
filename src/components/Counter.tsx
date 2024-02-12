import React, { useState } from 'react'


export default function Counter() {
    const [count, setCount] = useState(0);

    const handleIncrement =(event:React.MouseEvent<HTMLButtonElement>):void =>{
    setCount(count + 1);
    };

    const handleDecrement =(event:React.MouseEvent<HTMLButtonElement>):void =>{
        setCount(count - 1); 
    };

    const handleReset =(event:React.MouseEvent<HTMLButtonElement>):void =>{
        setCount(0);
    };

    const handleDouble =(event:React.MouseEvent<HTMLButtonElement>):void =>{
        setCount(count * 2);
    };

    return (
    <div>
        <p>Значение счетчика: {count}</p>
    <button onClick={handleIncrement}>+1</button>
    <button onClick={handleDecrement}>-1</button>
    <button onClick={handleReset}>0</button>
    <button onClick={handleDouble}>*2</button>
    </div>
  )
}