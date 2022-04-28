import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const HomeScreen = () => {

  const {user} = useContext(UserContext);
  const {id,nombre} = user;
  
  return (
    <div>
        <h1>HomeScreen</h1>
        <hr />

        <h3>ID:{ id } Usuario:{nombre}</h3>
    </div>
  )
}
