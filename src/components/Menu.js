import React, { Component } from 'react'
import {
  Input,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap'
import ActionTypes from '../flux/Constants'
import Dispatcher from '../flux/Dispatcher'
import store from '../flux/Store'

export default class Menu extends Component {

  constructor (props) {
    super(props)
    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false
    }
  }

  toggle () {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  showAll = () => {
    Dispatcher.dispatch({
      type: ActionTypes.SHOW_ALL_DEVICES
    })
  }

  filterOnline = () => {
    Dispatcher.dispatch({
      type: ActionTypes.FILTER_DEVICES_ONLINE
    })
  }

  filterOffline = () => {
    Dispatcher.dispatch({
      type: ActionTypes.FILTER_DEVICES_OFFLINE
    })
  }

  render () {

    return (
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">
          <h4>CMMC DEVICES</h4>
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle}/>
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Input type="text" id="filterDevice" placeholder="Filter device name"/>
            </NavItem>
            <UncontrolledDropdown nav>
              <DropdownToggle nav caret>
                Status
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem onClick={this.showAll}>
                  Show All
                </DropdownItem>
                <DropdownItem onClick={this.filterOnline}>
                  <i className='fa fa-circle text-success'/> Online
                </DropdownItem>
                <DropdownItem onClick={this.filterOffline}>
                  <i className='fa fa-circle text-secondary'/> Offline
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink href="#">
                <i className='fa fa-refresh'/>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    )
  }

}