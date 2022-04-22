import React, { useRef } from 'react';
import '../02-useEffect/effect.css';
export const FocusScreen = () => {

    const inputRef = useRef();

    const handleFocus = () => {
        // document.querySelector('input').select();
        inputRef.current.select();
    }
  return (
    <div>
        <h1>FocusScreen</h1>

        <input 
            ref={inputRef}
            className='form-control'
            placeholder='Tu Nombre'
        />

        <button 
            className='btn btn-outline-primary mt-5'
            onClick={handleFocus}
            >Focus</button>
    </div>
  )
}
