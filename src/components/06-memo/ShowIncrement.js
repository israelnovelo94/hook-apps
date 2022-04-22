import React from 'react'

export const ShowIncrement = React.memo(({increment}) => {
    console.log("ME volvi a llamar :(");
  return (
    <button className='btn btn-outline-primary' onClick={() => increment(5) }> +1 </button>
  )
})