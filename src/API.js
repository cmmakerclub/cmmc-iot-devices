import Paho from 'paho-mqtt/mqttws31'
import Dispatcher from './flux/Dispatcher'
import TypeActions from './flux/Constants'

const API = {
  MQTT: () => {
    const init = {
      hostname: 'mqtt.cmmc.io',
      port: 9001,
      path: '',
      clientId: String(Math.random() * 100)
    }

    const client = new Paho.MQTT.Client(init.hostname, init.port, init.path, init.clientId)

    client.onConnectionLost = onConnectionLost
    client.onMessageArrived = onMessageArrived
    client.connect({onSuccess: onConnect})

    function onConnect () {
      //console.log('onConnect')
      client.subscribe('MARU/+/status')
    }

    function onConnectionLost (responseObject) {
      if (responseObject.errorCode !== 0) {
        console.log('onConnectionLost:' + responseObject.errorMessage)
      }
    }

    function onMessageArrived (message) {
      //console.log(message.payloadString)
      Dispatcher.dispatch({
        type: TypeActions.MQTT_MESSAGE_ARRIVED,
        data: message.payloadString
      })

      setTimeout(() => {
        Dispatcher.dispatch({
          type: TypeActions.DEBUG,
          data: message.payloadString
        })
      }, 3000)
    }
  }
}

export default API