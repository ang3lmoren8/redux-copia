function createStore(reducer) {
  let state = {}
  const suscribers = []

  const store = {
    getState() {
      return { ...state }
    },

    dispatch(action) {
      state = reducer(state, action)
      suscribers.forEach(callback => callback(state))
    },

    suscribe(callback) {
      suscribers.push(callback)
    }
  }

  return store
}

export { createStore }
