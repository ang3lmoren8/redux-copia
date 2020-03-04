import store from './redux/store'

const itemDom = $('#item')
const listDom = $('#itemList')
const inputDom = $('#nameInput')

//Evento input
inputDom.keyup(e => {
  if (e.keyCode === 13) {
    const text = inputDom.val()
    store.dispatch({ type: 'ADD', payload: { text } })
    inputDom.val('')
  }
})

function updateItems(items) {
  //Vaciar lista
  listDom.html('')

  for (const item of items) {
    //Clonar item de prueba
    const cloneDom = itemDom.clone()
    cloneDom.removeClass('d-none')
    cloneDom.addClass('d-flex')

    //Obtener elementos dom de la lista
    const inputDom = cloneDom.find('input')
    const buttonDom = cloneDom.find('button')
    const spanDom = cloneDom.find('span')

    //Render
    spanDom.html(item.text)
    if (item.complete) {
      spanDom.css('text-decoration', 'line-through')
    }
    inputDom.prop('checked', item.complete)

    //Añadir listeners
    buttonDom.on('click', () => {
      store.dispatch({ type: 'DELETE', payload: { id: item.id } })
    })

    inputDom.on('click', () => {
      store.dispatch({ type: 'EDIT', payload: { id: item.id } })
    })

    listDom.append(cloneDom)
  }
}

//Suscribirse al store y callback en cada cambio de estado
store.subscribe(() => {
  const state = store.getState()
  updateItems(state)
})


//Precargar acciones
const actions = JSON.parse(localStorage.getItem('actions')) || []

actions.forEach((action, i) => {
  setTimeout(() => {
    store.dispatch(action)
  }, i * 1000)
});