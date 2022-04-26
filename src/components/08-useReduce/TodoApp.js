import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer';
import { useForm } from '../../hooks/useForm';

import './styles.css';

export const TodoApp = () => {

    const init = () => {
        return JSON.parse(localStorage.getItem('todos')) || [];
        
    }

    const [ todos, dispatch ] = useReducer(todoReducer, [], init);
     console.log(todos);

    useEffect(() => {
        localStorage.setItem('todos',JSON.stringify(todos));
    },[todos]);

    const [{ Description }, setFormState, reset] = useForm({
        Description: ''
    })

    
    const handleAddTodo = (e) => {
        e.preventDefault();
        
        if (Description.trim().length <= 1) {
            return;
        }
        const newTodo = {
            id: new Date().getTime(),
            desc: Description,
            done: false
        }

        const actionAdd = {
            type: 'add',
            payload: newTodo
        }
        
        dispatch( actionAdd );

        reset();
    }

    const handleDelete = (idTodo) => {
        const actionDelete = {
            type: 'delete',
            payload: idTodo
        }

        dispatch(actionDelete)
    }
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
                                <button 
                                    className='btn btn-danger'
                                    onClick={() => {handleDelete(todo.id)}}
                                    >Borrar
                                </button>
                            </li>
                        ))
                    } 
                </ul>
            </div>
            <div className='col-md-5'>
                <h4>Aregar TODO</h4>
                <hr />

                <form onSubmit={ handleAddTodo }>
                    <input 
                        type='text'
                        className='form-control'
                        autoComplete='off'
                        placeholder='Agregar ... '
                        name='Description'
                        value={Description}
                        onChange={setFormState}
                    />

                    <button
                        type='submit' 
                        className='btn btn-outline-primary mt-1 btn-block'
                    >Agregar</button>
                </form>
            </div>
        </div>
    </div>
  )
}
