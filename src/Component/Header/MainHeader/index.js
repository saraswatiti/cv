import React from 'react'
import { Navbar } from 'react-bootstrap'
import Navigation from '../Navigation'

/**
* @author
* @function MainHeader
**/

const MainHeader = ({ BrandName, BrandImage }) => {
    return (
        <Navbar collapseOnSelect expand="lg" variant="dark" fixed="top" className="bg-primary" id="sideNav">
            <Navbar.Brand href="#home">
                <span className="d-block d-lg-none">{BrandName}</span>
                <span className="d-none d-lg-block">
                    <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src={require(`../../../assets/img/${BrandImage}`)} alt="" />
                </span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Navigation />
            </Navbar.Collapse>
        </Navbar >
    )

}

export default MainHeader