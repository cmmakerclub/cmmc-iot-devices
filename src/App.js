import React, { Component } from 'react'
import Navbar from './components/Menu'
import Device from './components/Device'
import uuid from 'uuid'
import ActionTypes from './flux/Constants'
import Dispatcher from './flux/Dispatcher'
import store from './flux/Store'
import _ from 'underscore'
import API from './API'
import { CopyToClipboard } from 'react-copy-to-clipboard'

export default class App extends Component {

  constructor (props) {
    super(props)
    this.state = {
      devices: [],
      devicesOnline: [],
      bufferDevices: [],
      filterDevices: [],
      filterTopic: 'MARU/',
      topicMessages: ''
    }

    this.storeData = store.state

    store.addListener(() => {
      const devices = this.storeData.devices
      const devicesOnline = this.storeData.devicesOnline
      const filterDevices = this.storeData.filterDevices
      this.bufferDevices = this.state.bufferDevices
      const topicMessages = this.storeData.topicMessages

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

      if (topicMessages !== this.state.topicMessages) {
        this.setState({topicMessages: topicMessages})
      }

      //console.log(this.storeData)
    })

    console.log('constructor', this.props)
  }

  componentDidMount () {
    console.log('componentDidMount', this.props)
  }

  filterTopic = (e) => {
    e.preventDefault()
    this.setState({filterTopic: `MARU/${e.target.value}`})
    API.MQTT(this.state.filterTopic, true)
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

        <div className="row" style={{marginTop: 20, marginBottom: 30}}>

          <div className="col">
            <div className="card">
              <div className="card-body">

                <form>
                  <div className="form-group row">
                    <label className="col-sm-2 col-form-label text-right">
                      <b>Topic</b>
                    </label>
                    <div className="col-sm-10">
                      <input type="text" className="form-control"
                             onKeyUp={(e) => this.filterTopic(e)}
                             placeholder="Prefix MARU/"/>
                    </div>
                  </div>

                  <div className="form-group row">
                    <label className="col-sm-2 col-form-label text-right">
                      <b>
                        Messages
                      </b>
                    </label>
                    <div className="col-sm-10">

                      <code>
                        {this.state.topicMessages}
                      </code>

                    </div>
                  </div>

                  <div className="form-group text-right">
                    <CopyToClipboard text={this.state.topicMessages}>
                      <button type='button' className='btn btn-primary'>
                        <i className='fa fa-clipboard'/>&nbsp;
                        copy
                      </button>
                    </CopyToClipboard>
                  </div>

                </form>

              </div>
            </div>
          </div>

        </div>

      </div>
    )
  }

}