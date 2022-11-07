import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, 
NavLink } from 'reactstrap';

class R049_ReactstrapNavbar extends Component{
    constructor(props){
        super(props);
        this.state={ Collapsed: false }
    }

    toggle = () => {
        this.setState({Collapsed: !this.state.Collapsed})
    }

    render(){
        return(
            <>
            <Navbar color="danger" light>
                <NavbarBrand href="/"className="mr-auto">Navbar</NavbarBrand>
                <NavbarToggler onClick={this.toggle} className="mr-2"/>
                <Collapse isOpen={this.state.Collapsed} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink href="#">react</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="http://example.com/">200</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
            </>
        )
    }
}

export default R049_ReactstrapNavbar;