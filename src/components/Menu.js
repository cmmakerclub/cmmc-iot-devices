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
  DropdownItem,
  Form,
  FormGroup,
  Label
} from 'reactstrap'

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
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Status
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>
                  Show All
                </DropdownItem>
                <DropdownItem>
                  <i className='fa fa-circle text-success'/> Online
                </DropdownItem>
                <DropdownItem>
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