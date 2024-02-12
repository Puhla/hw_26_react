import React, { useState } from 'react'


export default function Counter_1() {
  const[count,setCount] = useState<number>(0);
  const[countStep,setCountStep] = useState<number>(1);
  
  const handleIncrement = () => {
    setCount(prevCount => prevCount + countStep);
  };
  const  handleDecrement = () => {
    setCount(prevCount => prevCount - countStep);
  };
  const handleReset = () => {
    setCount(0);
  };
  
    return (
    <div>
        <p>Значение счетчика: {count}</p>
    <button onClick={handleIncrement}>+{countStep}</button>
    <button onClick={handleDecrement}>-{countStep}</button>
    <button onClick={handleReset} >0</button>
       
     </div>
  )
}