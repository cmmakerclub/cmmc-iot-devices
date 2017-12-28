import React, { Component } from 'react'
import Navbar from './components/Menu'
import Device from './components/Device'
import uuid from 'uuid'
import store from './flux/Store'

export default class App extends Component {

  constructor (props) {
    super(props)
    this.state = {
      devices: [],
      devicesOnline: []
    }

    store.addListener(() => {
      const devices = store.devices
      const devicesOnline = store.devicesOnline

      const arrayDevices = []
      Object.keys(devices).map(key => {
        arrayDevices.push(devices[key])
      })

      const arrayDevicesOnline = []
      Object.keys(devicesOnline).map(key => {
        arrayDevicesOnline[key] = (devicesOnline[key])
      })

      this.setState({devices: arrayDevices})
      this.setState({devicesOnline: arrayDevicesOnline})

      // console.log(this.state)
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