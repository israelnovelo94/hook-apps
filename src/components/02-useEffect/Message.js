import React, { useEffect, useState } from 'react'

export const Message = () => {

    const [coords, setCoords] = useState({x:0,y:0})
    const {x,y} = coords;

    useEffect(() => {
        // Funcion que recive el evento, lo desestructuramos y obtenemos las coordenadas las cuales pasamos a state para actualizarlo
      const movemouse = ({x,y}) => {
        const coor = { x:x, y:y };
        setCoords(coor);
      }
      //Evento del movimiento del mouse, y mandamos nuestra funcion que recibe por default el evento e
      window.addEventListener('mousemove', movemouse);
    
      return () => {
        //   Retiramos la funcion del evento para no saturar la memoria
        window.removeEventListener('mousemove',movemouse);
      }
    }, [])
    
  return (
    <div>
        <h3>Datos Capturados</h3>
        <p>X:{ x } Y:{ y }</p>
    </div>
  )
}
