import React, { Component, Fragment } from 'react';
import "../assets/css/custom.css";
import { Container, Navbar } from 'react-bootstrap';
import logo from'../assets/images/ctp.png'


export class TopNavbar extends Component {
    render() {
        return (
            <Fragment>
                <Navbar expand="lg" variant="light" bg="light">
                    <Container fluid={true}>
                        <Navbar.Brand href="#home">
                            <img
                                alt=""
                                src={logo}
                                width="50"
                                height="50"
                                className="d-inline-block"
                            />{' '}
                            Bebo
                        </Navbar.Brand>
                        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
                    </Container>
                </Navbar>

            </Fragment>
        )
    }
}

export default TopNavbar
