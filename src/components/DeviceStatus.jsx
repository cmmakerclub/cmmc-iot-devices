import React from 'react'
import swal from 'sweetalert2'

const DeviceStatus = (props) => {

  const handleClick = (event) => {
    event.preventDefault()
    const data = props.device.d
    const info = props.device.info

    const table = `
      <table class="table table-bordered">
        <thead class="thead-light">
        <tr>
          <th>Info Key</th>
          <th>Value</th>
          <th>Data Key</th>
          <th>Value</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>ssid</td>
          <td>${info.ssid}</td>
          <td>myName</td>
          <td>${data.myName}</td>
        </tr>
        <tr>
          <td>flash_size</td>
          <td>${info.flash_size}</td>
          <td>millis</td>
          <td>${data.millis}</td>
        </tr>
        <tr>
          <td>flash_id</td>
          <td>${info.flash_id}</td>
          <td>CA</td>
          <td>${data.CA}</td>
        </tr>
        <tr>
          <td>chip_id</td>
          <td>${info.chip_id}</td>
          <td>temperature_c</td>
          <td>${data.temperature_c}</td>
        </tr>
        <tr>
          <td>sdk</td>
          <td>${info.sdk}</td>
          <td>humidity_percent_rh</td>
          <td>${data.humidity_percent_rh}</td>
        </tr>
        <tr>
          <td>mac</td>
          <td>${info.mac}</td>
          <td>state</td>
          <td>${data.state}</td>
        </tr>
        <tr>
          <td>client_id</td>
          <td>${info.client_id}</td>
          <td>heap</td>
          <td>${data.heap}</td>
        </tr>
        <tr>
          <td>device_id</td>
          <td>${info.device_id}</td>
          <td>rssi</td>
          <td>${data.rssi}</td>
        </tr>
        <tr>
          <td>prefix</td>
          <td>${info.prefix}</td>
          <td>counter</td>
          <td>${data.counter}</td>
        </tr>
        <tr>
          <td>ip</td>
          <td>${info.ip}</td>
          <td>subscription</td>
          <td>${data.subscription}</td>
        </tr>
        <tr>
          <td>version</td>
          <td>${info.version}</td>
        </tr>
        </tbody>
      </table>
    `

    swal({
      title: data.myName,
      html: table,
      confirmButtonText: 'Close'
    })

  }

  return (
    <div className="col-md-4">
      <div className="form-group">
        <div className="card">
          <div className="card-header bg-secondary">
          <span style={{color: 'white'}}>
            {props.title}
          </span>
          </div>
          <div className="card-body">
            <p>ip : {props.ip}</p>
            <p>heap : {props.heap}</p>
            <p>run time : {props.runtime}</p>
            <p>prefix : {props.prefix}</p>
            <div className='text-right'>
              <button typeof='button' className='btn btn-secondary' onClick={(e) => handleClick(e)}>MORE INFO</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DeviceStatus
