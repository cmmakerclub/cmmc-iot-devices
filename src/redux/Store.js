import actionTypes from './Constants'
import todoApp from './Reducers'
import { createStore } from 'redux'

const store = createStore(todoApp)

const INIT_START_GET_DATA = (DATA) => {
  const action = {
    type: actionTypes.START_GET_DATA,
    data: DATA
  }
  store.dispatch(action)
}

const INIT_DONE_GET_DATA = (DATA) => {
  const action = {
    type: actionTypes.DONE_GET_DATA,
    data: DATA
  }
  store.dispatch(action)
}

export {
  INIT_START_GET_DATA,
  INIT_DONE_GET_DATA
}

