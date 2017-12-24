import React, { Component } from 'react'
import { connect } from 'react-redux'
import DeviceStatus from './components/DeviceStatus'
import uuid from 'uuid'

class App extends Component {

  constructor (props) {
    super(props)
    this.state = {
      devices: []
    }
  }

  componentDidMount () {

    setTimeout(() => {

      const arrayDevices = []
      Object.keys(this.props.devices).map(key => {
        arrayDevices.push(this.props.devices[key])
        console.log(this.props.devices[key])
      })
      this.setState({devices: arrayDevices})

    }, 1000)

  }

  render () {
    return (
      <div className='container'>
        <div className="row" style={{marginTop: 30}}>

          {
            this.state.devices.map(device => {
              return <DeviceStatus
                key={uuid()}
                title={device.d.myName}
                ip={device.info.ip}
                heap={device.d.heap}
                runtime={`${((device.d.millis / 60000) / 60).toFixed(2)} hour`}
                prefix={device.info.prefix}
                device={device}
              />
            })
          }

        </div>
      </div>
    )
  }

}

export default connect(state => state)(App)