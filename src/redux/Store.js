import ActionTypes from './Constants'
import todoApp from './Reducers'
import { createStore } from 'redux'

const store = createStore(todoApp)

const INIT_START_GET_DATA = (DATA) => {
  store.dispatch({
    type: ActionTypes.START_GET_DATA,
    data: DATA
  })
}

const INIT_DONE_GET_DATA = (DATA) => {
  store.dispatch({
    type: ActionTypes.DONE_GET_DATA,
    data: DATA
  })
}

const MQTT_MESSAGE_ARRIVED = (DATA) => {
  store.dispatch({
    type: ActionTypes.MQTT_MESSAGE_ARRIVED,
    data: DATA
  })
}

export {
  INIT_START_GET_DATA,
  INIT_DONE_GET_DATA,
  MQTT_MESSAGE_ARRIVED
}

