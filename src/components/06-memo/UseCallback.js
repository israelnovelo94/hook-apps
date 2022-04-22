import React, { useCallback, useState } from 'react';

import '../02-useEffect/effect.css';
import { ShowIncrement } from './ShowIncrement';
export const UseCallback = () => {

    const [counter, setCounter] = useState(1);

    const increment = useCallback(
      (num) => {
        setCounter(c => c + num);
      },
      [setCounter],
    )
    
  return (
    <div>
        <h1>UseCallback Hook: {counter}</h1>
        <hr />

        <ShowIncrement increment={increment}/>
    </div>
  )
}
