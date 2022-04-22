import React from 'react'
import { useForm } from '../../hooks/useForm';
import { Message } from './Message';

import './effect.css'
export default function FormWithCustomHook() {

    //Nuestro customHook con las partes de nuestro formulario
    const [formState, setFormState] = useForm({
        name: '',
        mail: '',
        password: ''
    })

    // Desestructuramos nuestro customHook
    const {name,mail,password} = formState;

    //Funcion que se dispara al hacer submit
    const handleFormSubmit= (e) => {
        //Detenemos el submit
        e.preventDefault();
        //Mostramos los values de nuestro formulario
        console.log(formState);
    }

  return (
    <>
        <h1>FormWithCustomHook</h1>
        <hr />

        <form onSubmit={handleFormSubmit}>
            <div className='form-group'>
                <input
                    type='text' 
                    className='form-control'
                    name='name'
                    autoComplete='off'
                    placeholder='Tu Nombre'
                    value={name}
                    onChange={setFormState}
                />
            </div>
            <div className='form-group'>
                <input
                    type='email' 
                    className='form-control'
                    name='mail'
                    autoComplete='off'
                    placeholder='email@gmail.com'
                    value={mail}
                    onChange={setFormState}
                />
            </div>

            <div className='form-group'>
                <input
                    type='password' 
                    className='form-control'
                    name='password'
                    placeholder='**********'
                    value={password}
                    onChange={setFormState}
                />
            </div>

            <button type='submit' className='btn btn-primary'>Guardar</button>
        </form>

        { (name === '123') && <Message />}
    </>
  )
}
