import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer';
import { TodoList } from './TodoList';

import './styles.css';
import { TodoAdd } from './TodoAdd';

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
    
    const handleAddTodo = ( newTodo ) => {
        dispatch ({
            type: 'add',
            payload: newTodo
        })
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

    // Funcion que se ejecutara para eliminar algun elemento del 'todos'
    const handleToggle = (idTodo) => {
        // Enviamos la accion al dispatch que se encarga de mandarlo al todoReducer
        dispatch({
            type: 'toggle',
            payload: idTodo
        })
    }
  return (
    <div>
        <h1>TodoApp ({ todos.length })</h1>
        <hr />

        <div className='row'>
            <div className='col-md-7'>
                <TodoList 
                    todos={todos}
                    handleDelete={handleDelete}
                    handleToggle={handleToggle}
                />
            </div>
            <div className='col-md-5'>
                <TodoAdd handleAddTodo={ handleAddTodo }/>
            </div>
        </div>
    </div>
  )
}
