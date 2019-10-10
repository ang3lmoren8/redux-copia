import { createStore } from './redux'

//Este reducer se ejecuta dentro de la funcion dispatch del store, y lo que sea que retorne es el nuevo estado de la app
function reducer(state = {}, action) {
  switch (action.type) {
    case 'NUEVA':
      return action.payload
    default:
      return state
  }
}

const store = createStore(reducer)

//Agregar la funcion flecha a los suscribers, (Funciones ejecutadas cuando el estado cambia)
store.suscribe(() => {
  console.log('Se ejecutó la función flecha suscrita en el store')
  const state = store.getState()
  console.log(state)
})

store.dispatch({
  type: 'NUEVA',
  payload: {
    nombre: 'Pepito',
    apellido: 'Perez'
  }
})
