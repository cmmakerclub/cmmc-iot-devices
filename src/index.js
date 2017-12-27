import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import API from './API'
import App from './App';
// // import registerServiceWorker from './registerServiceWorker';
//
API.MQTT()

ReactDOM.render(<App />, document.getElementById('root'));
// // registerServiceWorker();
