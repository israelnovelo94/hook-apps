import React, { useMemo, useState } from 'react'
import { procesoPesado } from '../../helpers/procesoPesado';
import useCounter from '../../hooks/useCounter'

import '../02-useEffect/effect.css';


export const HookMemo = () => {

  const {counter, increment} = useCounter(10);
  const [show, setShow] = useState(false);

  const memorize = useMemo(() => procesoPesado(counter), [counter]);

  return (
    <div>
        <h1>
            MemoHook
        </h1>
        <hr />

        <h3>{ memorize }</h3>
        <h3>Counter <small>{ counter }</small></h3>

        <button
          className='btn btn-primary'
          onClick={increment}
        >
          +1
        </button>

        <button 
          className='btn btn-outline-primary ml-5' 
          onClick={()=>{setShow(!show)}}
        >
          Show/Hide {JSON.stringify(show)}
        </button>
    </div>
  )
}
