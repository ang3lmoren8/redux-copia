const actions = []

const localStorageMiddleware = store => next => action => {
  actions.push(action)
  localStorage.setItem('actions', JSON.stringify(actions))

  //Continuar flujo
  next(action)
}

export default localStorageMiddleware
