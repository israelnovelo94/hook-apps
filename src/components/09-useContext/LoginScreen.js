import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const LoginScreen = () => {

  const {setUser} = useContext(UserContext);
  //const {setUser} = usrContext;
  return (
    <div>
        <h1>LoginScreen</h1>
        <hr />
        <button 
          className='btn btn-outline-primary'
          onClick={() => setUser({id:123, nombre: 'Israel Novelo'})}
          
        >
          Crear usuario
        </button>
    </div>
  )
}
