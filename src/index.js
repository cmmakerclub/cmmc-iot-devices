import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import API from './API'
import App from './App';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './redux/Reducers'
// // import registerServiceWorker from './registerServiceWorker';
//
API.MQTT()
let store = createStore(todoApp)
//
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
// // registerServiceWorker();

// import ActionTypes from './redux/Constants'
// import { createStore } from 'redux'
//
// let initialState = {
//   devices: []
// }
//
// const todoApp = (state = initialState, action) => {
//
//   switch (action.type) {
//
//     case ActionTypes.MQTT_MESSAGE_ARRIVED : {
//
//       // const obj = JSON.parse(action.data)
//       //
//       // if (state.devices[obj.d.myName] === undefined) {
//       //   state.devices[obj.d.myName] = action.data
//       // }
//       // break
//
//       return state.devices = action.data
//
//     }
//
//     default :
//       return state
//
//   }
//
// }
//
// const store = createStore(todoApp)
//
// let currentValue = store.getState()
// store.subscribe(() => {
//   let previousValue = currentValue
//   currentValue = store.getState().name
//
//   if (previousValue !== currentValue) {
//     console.log(
//       'Some deep nested property changed from',
//       previousValue,
//       'to',
//       currentValue
//     )
//   }
// })
//
// store.dispatch({
//   type: ActionTypes.MQTT_MESSAGE_ARRIVED,
//   data: [
//     {name: 'js'}
//   ]
// })
