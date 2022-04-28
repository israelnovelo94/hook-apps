import React from 'react'
import useCounter from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'
import '../02-useEffect/effect.css'
export const MultipleCustomhooks = () => {

    // Hook contador que se usara para cambiar la url y traer diferentes quotes
    const {counter, increment, decrement} = useCounter(1);
    const url = `https://www.breakingbadapi.com/api/quotes/${counter}`;
    // Hook del useFetch para validar la url que traera la data, desestructuramos el loading y la data
    const {loading,data} = useFetch(url);
    
    //  Si la DATA trae informacion la extraemos
     const {author, quote} = !!data && data[0];
        console.log(data);

  return (
    <div>
        <h1>BreakingBad Quotes</h1>
        {
            loading
            ?
                (
                    <div className='alert alert-info text-center'>
                        Loading...
                    </div>
                )
            :
                (
                    <blockquote className='blockquote text-right'>
                        <p className='mb-0'>{ quote }</p>
                        <footer className='blockquote-footer'>{ author }</footer>
                    </blockquote>
                )
        }
            <button className='btn btn-primary' onClick={decrement}>
                Anterior Quote
            </button>

            <button className='btn btn-primary' onClick={increment}>
                Siguiente Quote
            </button>
    </div>
  )
}
