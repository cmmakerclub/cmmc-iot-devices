import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import API from './API'
import App from './App'
import 'font-awesome/css/font-awesome.min.css'
// // import registerServiceWorker from './registerServiceWorker';
//
API.MQTT()

ReactDOM.render(<App/>, document.getElementById('root'))
// // registerServiceWorker();
