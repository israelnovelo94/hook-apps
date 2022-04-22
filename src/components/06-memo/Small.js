import React from 'react'

// Pequeño componente con el MEMO, memoriza el componente y solo lo ejecuta cada vez que el value cambia
export const Small = React.memo(({value = 10}) => {
    console.log("HEY");
  return (
    <small>{value}</small>
  )
})
