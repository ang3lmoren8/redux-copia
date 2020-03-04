import store from './redux/store'


function updateItems(items){
  console.log(items)
  console.log('holaaaaaa')
}

store.subscribe(() => {
  console.log(store.getState())
  const state = store.getState()
  updateItems(state)
})


store.dispatch({
  type: 'ADD',
  payload: {text: 'hola'}
})