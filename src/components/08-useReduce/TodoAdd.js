import React from 'react'
import { useForm } from '../../hooks/useForm';

export const TodoAdd = ({handleAddTodo}) => {
    const [{ Description }, handleInputChange, reset] = useForm({
        Description: ''
    })


    const handleSubmit = (e) => {
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
        // Enviamos la accion al dispatch que se encarga de mandarlo al todoReducer
        handleAddTodo( newTodo );
        // Reseteamos el form
        reset();
    }
  return (
    <>
        <h4>Aregar TODO</h4>
        <hr />

        <form onSubmit={ handleSubmit }>
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
    </>
  )
}
