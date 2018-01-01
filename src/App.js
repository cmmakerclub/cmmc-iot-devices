import React, { Component } from 'react'
import Navbar from './components/Menu'
import Device from './components/Device'
import uuid from 'uuid'
import ActionTypes from './flux/Constants'
import Dispatcher from './flux/Dispatcher'
import store from './flux/Store'
import _ from 'underscore'

export default class App extends Component {

  constructor (props) {
    super(props)
    this.state = {
      devices: [],
      devicesOnline: [],
      bufferDevices: [],
      filterDevices: []
    }

    this.storeData = store.state

    store.addListener(() => {
      const devices = this.storeData.devices
      const devicesOnline = this.storeData.devicesOnline
      const filterDevices = this.storeData.filterDevices
      this.bufferDevices = this.state.bufferDevices

      const arrayDevices = []
      const arrayDevicesOnline = []

      if (devices !== this.state.devices) {
        Object.keys(devices).map(key => {
          arrayDevices.push(devices[key])
        })
        this.setState({devices: arrayDevices})
      }

      if (devicesOnline !== this.state.devicesOnline) {
        Object.keys(devicesOnline).map(key => {
          arrayDevicesOnline[key] = (devicesOnline[key])
        })
        this.setState({devicesOnline: arrayDevicesOnline})
      }

      switch (this.storeData.filterMode) {
        case 0 : // show all
          if (!_.isEmpty(this.bufferDevices)) {
            this.setState({
              devices: this.state.bufferDevices,
              bufferDevices: []
            })
          }

          break
        case 1 : // devices online
          const filterDevicesOnline = []
          Object.keys(devicesOnline).map(key => {
            filterDevicesOnline.push(devicesOnline[key])
          })
          this.setState({
            bufferDevices: arrayDevices,
            devices: filterDevicesOnline
          })

          break
        case 2 : // devices offline
          if (!_.isEmpty(this.bufferDevices)) {

            const offlineDevices = []

            Object.keys(devicesOnline).map(key => {
              _.find(this.bufferDevices, device => {
                if (device.d.myName !== key) {
                  offlineDevices.push(device)
                }
              })
            })

            this.setState({
              devices: offlineDevices
            })

            console.log(this.state)
          }

          break
        case 3 : // filter devices by name
          this.setState({
            bufferDevices: this.state.devices,
            devices: filterDevices
          })
          console.log('result : ', filterDevices)
          console.log('filter completed.')
          break
        default :
          return false
      }

      //console.log(this.storeData)
    })

    console.log('constructor', this.props)
  }

  componentDidMount () {
    console.log('componentDidMount', this.props)
  }

  render () {

    return (
      <div className='container'>

        <Navbar/>

        <div className="row" style={{marginTop: 30}}>

          {
            this.state.devices.map(device => {
              return <Device
                key={uuid()}
                title={device.d.myName}
                ip={device.info.ip}
                heap={device.d.heap}
                runtime={`${((device.d.millis / 60000) / 60).toFixed(2)} hour`}
                prefix={device.info.prefix}
                device={device}
                online={(this.state.devicesOnline[device.d.myName]) !== undefined && true}
              />
            })
          }

        </div>
      </div>
    )
  }

}

// const mapStateToProps = (state) => {
//   return {
//     devices: state.devices,
//     devicesOnline: state.devicesOnline
//   }
// }