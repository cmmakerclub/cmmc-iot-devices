import ActionTypes from './flux/Constants'
import { createStore } from 'redux'

let initialState = {
  devices: []
}

const todoApp = (state = initialState, action) => {

  switch (action.type) {

    case ActionTypes.MQTT_MESSAGE_ARRIVED : {

      const obj = JSON.parse(action.data)

      if (state.devices[obj.d.myName] === undefined) {
        state.devices[obj.d.myName] = action.data
      }

      break

    }

    default :
      return state

  }

}

const store = createStore(todoApp)

store.dispatch({
  type: ActionTypes.MQTT_MESSAGE_ARRIVED,
  data: [
    'test'
  ]
})

store.subscribe(() => {
  console.log(store.getState())
})