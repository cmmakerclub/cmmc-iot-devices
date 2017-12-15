import Paho from 'paho-mqtt/mqttws31'

const API = {
  MQTT: () => {
    const init = {
      hostname: 'mqtt.cmmc.io',
      port: 9001,
      path: '',
      clientId: String(Math.random() * 100)
    }

    const client = new Paho.MQTT.Client(init.hostname, init.port, init.path, init.clientId);

    client.onConnectionLost = onConnectionLost;
    client.onMessageArrived = onMessageArrived;
    client.connect({onSuccess:onConnect});

    function onConnect() {
      console.log("onConnect");
      client.subscribe('CMMC/#')
    }

    function onConnectionLost(responseObject) {
      if (responseObject.errorCode !== 0) {
        console.log("onConnectionLost:"+responseObject.errorMessage);
      }
    }

    function onMessageArrived(message) {
      console.log("onMessageArrived:"+message.payloadString);
    }
  }
}

export default API