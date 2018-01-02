import { Store } from 'flux/utils'
import AppDispatcher from './Dispatcher'
import ActionTypes from './Constants'

class MyStore extends Store {

  constructor (props) {
    super(props)

    this.state = {
      devices: [],
      devicesOnline: [],
      filterMode: 0, // 0 = show all, 1 = online, 2 = offline, 3 = filter by name
      filterDevices: [],
      topicMessages: ''
    }

  }

  __onDispatch (action) {

    if (action.type === ActionTypes.MQTT_MESSAGE_ARRIVED) {

      const previousValue = this.state.devices
      const currentValue = JSON.parse(action.data)
      const devicesOnline = this.state.devicesOnline

      if (previousValue[currentValue.d.myName] === undefined) {
        previousValue[currentValue.d.myName] = currentValue
      } else {
        devicesOnline[currentValue.d.myName] = currentValue
      }

      this.__emitChange()

    } else if (action.type === ActionTypes.MQTT_TOPIC_MESSAGE_ARRIVED) {

      this.state.topicMessages = action.data
      this.__emitChange()

    } else if (action.type === ActionTypes.SHOW_ALL_DEVICES) {

      this.state.filterMode = 0
      this.__emitChange()

    } else if (action.type === ActionTypes.FILTER_DEVICES_ONLINE) {

      this.state.filterMode = 1
      this.__emitChange()

    } else if (action.type === ActionTypes.FILTER_DEVICES_OFFLINE) {

      this.state.filterMode = 2
      this.__emitChange()

    } else if (action.type === ActionTypes.FILTER_DEVICES_NAME) {

      const search = action.data
      let filterDevices = []
      Object.keys(this.state.devices).map(key => {
        let matchingKey = key.indexOf(search) !== -1
        if (matchingKey) {
          filterDevices.push(this.state.devices[key])
        }
      })
      this.state.filterDevices = filterDevices
      this.state.filterMode = 3
      this.__emitChange()

    }

  }

}

export default new MyStore(AppDispatcher)