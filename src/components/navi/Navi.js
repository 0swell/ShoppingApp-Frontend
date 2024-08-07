import React, { Component } from "react";
import CartSummary from "../cart/CartSummary"; 

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavLink,
  NavItem,
  NavbarText,
} from "reactstrap";

export default class Navi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Northwind App</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="me-auto" navbar>
              <NavItem>
              <a className="nav-link" href="https://github.com/reactstrap/reactstrap">QWECA</a>
              </NavItem>
              <NavItem>
              <a className="nav-link" href="https://github.com/reactstrap/reactstrap">ASD</a>
              </NavItem>
              <NavItem>
                <a className="nav-link" href="https://github.com/reactstrap/reactstrap">GitHub</a>
              </NavItem>
              <CartSummary/>
            </Nav>
            <NavbarText>Simple Text</NavbarText>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
