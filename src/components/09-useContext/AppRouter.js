import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from 'react-router-dom';
import { AboutScreen } from './AboutScreen';
import { HomeScreen } from './HomeScreen';
import { LoginScreen } from './LoginScreen';

export const AppRouter = () => {
  return (
    <div>
        <Router>
            <Routes>
                <Route exact path='/' element={ <HomeScreen /> } />
                
                <Route exact path='/login' element={ <LoginScreen /> } />
                <Route exact path='/about' element={ <AboutScreen /> } />
            </Routes>
        </Router>
    </div>
  )
}
