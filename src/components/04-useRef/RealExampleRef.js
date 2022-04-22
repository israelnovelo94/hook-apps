import React, { useState } from 'react'
import { MultipleCustomhooks } from '../03-examples/MultipleCustomhooks'

export const RealExampleRef = () => {

    const [show, setShow] = useState(false)
  return (
    <div>
        <h1>RealExampleRef</h1>
        <hr />
        
        { show && <MultipleCustomhooks /> }
        
        <button
            className='btn btn-outline-primary mt-5'
            onClick={ () => { setShow( !show ) } }
        >
            Show/Hide
        </button>
    </div>
  )
}
