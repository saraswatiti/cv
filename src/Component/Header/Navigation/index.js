import React from 'react'
import { Nav } from 'react-bootstrap'
// import { Link } from 'react-router-dom'
import { Link } from 'react-scroll';


/**
* @author
* @function Navigation
**/

const Navigation = (props) => {
    return (
        <Nav>
            <Link activeClass="active" spy={true}
                smooth={true}
                hashSpy={true}
                offset={50}
                duration={500} to="#about"
                className="nav-link" >About</Link>

            <Link activeClass="active" spy={true}
                smooth={true}
                hashSpy={true}
                offset={50}
                duration={500} to="#experience"
                className="nav-link" >Experience</Link>

            <Link activeClass="active" spy={true}
                smooth={true}
                hashSpy={true}
                offset={50}
                duration={500} to="#education"
                className="nav-link" >Education</Link>

            <Link activeClass="active" spy={true}
                smooth={true}
                hashSpy={true}
                offset={50}
                duration={500} to="#skill"
                className="nav-link" >Skills</Link>

            <Link activeClass="active" spy={true}
                smooth={true}
                hashSpy={true}
                offset={50}
                duration={500} to="#interests"
                className="nav-link" >Interests</Link>

            <Link activeClass="active" spy={true}
                smooth={true}
                hashSpy={true}
                offset={50}
                duration={500} to="#awards"
                className="nav-link" >Awards</Link>

        </Nav>
    )



}

export default Navigation