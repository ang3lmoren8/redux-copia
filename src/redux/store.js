import { createStore, applyMiddleware } from 'redux'
import reducer from './reducer'
import localStorageMiddleware from './localStorageMiddleware'

const store = createStore(reducer, undefined, applyMiddleware(localStorageMiddleware))

export default store
