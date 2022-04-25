import React, { useReducer } from 'react'
import { todoReducer } from './todoReducer';

import './styles.css';

export const TodoApp = () => {

    const initialState = [{
        id: new Date().getTime(),
        desc: "Estado inicial",
        done: false
    }]

    const [ todos ] = useReducer(todoReducer, initialState);
     console.log(todos);
  return (
    <div>
        <h1>TodoApp ({ todos.length })</h1>
        <hr />

        <div className='row'>
            <div className='col-md-7'>
                <ul className='list-group list-group-flush'>
                    {
                        todos.map( (todo,i) => (
                            <li
                                className='list-group-item'
                                key={todo.id}
                            >
                                <p className='text-center'>{i + 1}.{todo.desc}</p>
                                <button className='btn btn-danger'>Borrar</button>
                            </li>
                        ))
                    } 
                </ul>
            </div>
            <div className='col-md-5'>
                <h4>Aregar TODO</h4>
                <hr />

                <form>
                    <input 
                        type='text'
                        className='form-control'
                        autoComplete='off'
                        placeholder='Agregar ... '
                        name='Description'
                    />

                    <button className='btn btn-outline-primary mt-1 btn-block'>Agregar</button>
                </form>
            </div>
        </div>
    </div>
  )
}
