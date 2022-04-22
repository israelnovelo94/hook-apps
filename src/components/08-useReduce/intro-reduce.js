// Inicializamos el state
const initialState = [{
    id: 1,
    todo: 'Comprar pan',
    done: false
}];

// creamos el useReduce
const todoReduce = ( state = initialState, action) => {
    // Validamos la accion, el ? es porque el primer valor de la accion esta vacio, solo se ejecuta si hay type
    if (action?.type === 'add') {
        //Unica forma de añadir o modificar el state, NO USAR PUSH
        return [ ...state, action.payload ]
    }
    return state;
}

//inicializamos y guardamos el valor actual del state
let todos = todoReduce();

// Creamos el objeto numero 2
const obj2 = {
    id: 2,
    todo: 'Comprar leche',
    done: false
}

//Creamos la accion, en este caso add(puede ser cualquier nombre) y añadimos el obj2
const actionAddTodo = {
    type: 'add',
    payload: obj2
}

//Volvemos a ejecutar el todoReduce mandando el valor anterior del state y la accion a realizar (add)
todos = todoReduce( todos, actionAddTodo );

// Imprimimos en consola el resultado que es el valor inicial y el que añadimos
console.log(todos);