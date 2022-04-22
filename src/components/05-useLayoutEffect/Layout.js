import React, { useLayoutEffect, useRef, useState } from 'react';
import useCounter from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';

import './layout.css';

export const Layout = () => {

    //Hook para hacer referencia a la etiqueta <p></p> 
    const pTag = useRef();

    // useState en el que se guardan los datos del getBoundingClientRect y los mostraremos en el componente
    const [boxSize, setBoxSize] = useState({});
    
    // Hook personalizado que funciona como contador
    const {counter, increment} = useCounter(1);
    // Creamos la url que enviaremos al Hook del useFetch
    const url = `https://www.breakingbadapi.com/api/quotes/${counter}`;
    // Desestructuracion del return del useFetch, extraemos el data que contiene la informacion que desplegaremos
    const { data } = useFetch(url);
    // Volvemos a desestructurar pero ahora el data con la condicion que no llegue vacio
    const {author, quote} = !!data && data[0];

    useLayoutEffect(() => {
      setBoxSize(pTag.current.getBoundingClientRect());
    }, [quote])
  return (
    <div>
        <h1>LayoutEffect</h1>
        
            <blockquote className='blockquote text-right'>
                <p className='mb-0' ref={pTag}>{ quote }</p>
                <footer className='blockquote-footer'>{ author }</footer>
            </blockquote>

            <pre>{JSON.stringify(boxSize,"",3)}</pre>

            <button className='btn btn-primary' onClick={increment}>
                Siguiente Quote
            </button>
    </div>
  )
}
