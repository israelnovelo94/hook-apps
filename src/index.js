import React from 'react';
import ReactDOM from 'react-dom/client';
// import { Hookapp } from './Hookapp';
// import { CounterWithCustomHook } from './components/01 useState/CounterWithCustomHook';
// import { CounterApp } from './components/01 useState/CounterApp';
// import FormWithCustomHook from './components/02-useEffect/FormWithCustomHook';
// import SimpleForm from './components/02-useEffect/SimpleForm';
// import { MultipleCustomhooks } from './components/03-examples/MultipleCustomhooks';
// import { FocusScreen } from './components/04-useRef/FocusScreen';
// import { RealExampleRef } from './components/04-useRef/RealExampleRef';
// import { Layout } from './components/05-useLayoutEffect/Layout';
// import { Memorize } from './components/06-memo/Memorize';
// import { HookMemo } from './components/06-memo/HookMemo';
// import { UseCallback } from './components/06-memo/UseCallback';
import { Padre } from './components/07-tarea-memo/Padre';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <Padre />

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
