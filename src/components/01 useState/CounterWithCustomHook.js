import React from 'react';
import useCounter from '../../hooks/useCounter'; //importamos nuestro customHook
import './counter.css';
export const CounterWithCustomHook = () => {
    
    const {state, increment, decrement,reset} = useCounter(100); //Utilizamos nuestro customHook con desestructuracion
    return (
    <>
        <h1>Contador: { state }</h1>
        <hr />
        <button className='btn' onClick={ ()=>{increment(5)} }>+1</button>
        <button className='btn' onClick={ ()=>{reset()} }>Reset</button>
        <button className='btn' onClick={ ()=>{decrement(5)} }>-1</button>

    </>
  )
}
