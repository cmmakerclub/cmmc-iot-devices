import { Store } from 'flux/utils'
import AppDispatcher from './Dispatcher'
import ActionTypes from './Constants'

class MyStore extends Store {

  constructor (props) {
    super(props)

    this.devices = []
    this.devicesOnline = []
  }

  __onDispatch (action) {

    if (action.type === ActionTypes.MQTT_MESSAGE_ARRIVED) {

      const previousValue = this.devices
      const currentValue = JSON.parse(action.data)
      const devicesOnline = this.devicesOnline

      if (previousValue[currentValue.d.myName] === undefined) {
        previousValue[currentValue.d.myName] = currentValue
      } else {
        devicesOnline[currentValue.d.myName] = currentValue
      }

      this.__emitChange()
    }

  }

}

export default new MyStore(AppDispatcher)