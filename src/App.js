import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import API from './API'
//
// class App extends Component {
//
//   constructor (props) {
//     super(props)
//   }
//
//   componentDidMount () {
//     API.MQTT()
//   }
//
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }
//
// export default App;

export default class App extends Component {

  render () {
    return (
      <div className='container'>
        <section className="section">

          <div className="columns is-desktop">

            <div className="column">
              <div className="card">
                <div className="card-header">
                  <p className='card-header-title'>device name</p>
                </div>
                <div className="card-content">
                  <p>ip :</p>
                  <p>heap :</p>
                  <p>run time :</p>
                  <p>prefix :</p>
                  <div className="level-right">
                    <button typeof='button' className='button is-light'>MORE INFO</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="column">
              <div className="card">
                <div className="card-header">
                  <p className='card-header-title'>device name</p>
                </div>
                <div className="card-content">
                  <p>ip :</p>
                  <p>heap :</p>
                  <p>run time :</p>
                  <p>prefix :</p>
                  <div className="level-right">
                    <button typeof='button' className='button is-light'>MORE INFO</button>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </section>
      </div>
    )
  }

}
