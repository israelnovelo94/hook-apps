import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer';
import { useForm } from '../../hooks/useForm';

import './styles.css';

export const TodoApp = () => {
    //funcion que ocupa el lugar/valor del initialState en el useReduce
    const init = () => {
        //Retorna el arreglo que esta almacenado en el localStorage como es string lo parseamos a JSON, si esta vacio retornamos un arreglo vacio []
        return JSON.parse(localStorage.getItem('todos')) || [];
        
    }

    // useReducer enviamos la funcion que controla las acciones (todoReducer) el valor inicial (arreglo vacio), funcion init que ocupa el lugar del valor inicial
    const [ todos, dispatch ] = useReducer(todoReducer, [], init);

    // Se ejecuta cada vez que hay cambios en los 'todos'
    useEffect(() => {
        // Si se ejecuta el useEffect mandamos la lista de todos al localStorage la convertimos en string porque el local no adminte arreglos
        localStorage.setItem('todos',JSON.stringify(todos));
    },[todos]);
    // CustomHook para nuestro formulario, desestructuramos el campo Description, obtenemos la funcion handleInputChange que actualiza el valos y el reset que reinicia el input
    const [{ Description }, handleInputChange, reset] = useForm({
        Description: ''
    })

    // funcion que agrega el valor del input al arreglo 'todos'
    const handleAddTodo = (e) => {
        // Detenemos la recarga al hacer submit
        e.preventDefault();
        // Validamos que el campo no venga vacio
        if (Description.trim().length <= 1) {
            return;
        }
        // EL valor que agregaremos al 'todos', el Description es el valor del input
        const newTodo = {
            id: new Date().getTime(),
            desc: Description,
            done: false
        }
        // La action que enviaremos en este caso es agregar 'add'
        const actionAdd = {
            type: 'add',
            payload: newTodo
        }
        
        // Enviamos la accion al dispatch que se encarga de mandarlo al todoReducer
        dispatch( actionAdd );
        // Reseteamos el form
        reset();
    }
    // Funcion que se ejecutara para eliminar algun elemento del 'todos'
    const handleDelete = (idTodo) => {
        // action que enviaremos en este caso eliminar 'delete'
        const actionDelete = {
            type: 'delete',
            payload: idTodo
        }
        // Enviamos la accion al dispatch que se encarga de mandarlo al todoReducer
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
                        onChange={handleInputChange}
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
