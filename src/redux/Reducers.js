import ActionTypes from './Constants'
// import { createStore } from 'redux'

let initialState = {
  devices: [],
}

const todoApp = (state = initialState, action) => {

  switch (action.type) {

    case ActionTypes.MQTT_MESSAGE_ARRIVED : {

      // console.log('==== MESSAGE ARRIVED ====')

      const previousValue = state.devices
      const currentValue = JSON.parse(action.data)

      if (previousValue[currentValue.d.myName] === undefined) {
        previousValue[currentValue.d.myName] = currentValue
      }
      //
      // setTimeout(() => {
      //   state.devices['test'] = 'hello'
      // }, 3000)

      break;

    }

    default :
      return state

  }

}

// const store = createStore(todoApp)

// console.log(store.getState())

// let currentValue = store.getState()
//
// store.subscribe(() => {
//   let previousValue = currentValue
//   currentValue = store.getState()
//
//   if (previousValue !== currentValue) {
//     console.log('state has changed')
//     console.log(store.getState())
//   }
// })


export default todoApp