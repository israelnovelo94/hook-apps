import React, { useEffect, useState } from 'react'
import './effect.css'
import { Message } from './Message';
export default function SimpleForm() {
    const [formState, setFormState] = useState({
        name: '',
        mail: ''
    })

    const {name,mail} = formState;

    useEffect(() => {
    //   console.log('Hola');
    },[]);

    useEffect(() => {
    // console.log('cambio el formulario');
    },[formState]);

    useEffect(() => {
    // console.log('email cambio');
    },[mail]);
    
    const handleInputChange = ({target}) => {
        setFormState({
            ...formState,
            [target.name]: target.value
        })
    }
  return (
    <>
        <h1>useEffect</h1>
        <hr />

        <form>
            <div className='form-group'>
                <input
                    type='text' 
                    className='form-control'
                    name='name'
                    autoComplete='off'
                    placeholder='Tu Nombre'
                    value={name}
                    onChange={handleInputChange}
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
                    onChange={handleInputChange}
                />
            </div>
        </form>

        { (name === '123') && <Message />}
    </>
  )
}
