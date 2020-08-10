import React from 'react'
import { Container } from 'react-bootstrap'
import Sections from '../../Common/Sections'
import SectionTitle from '../../Common/SectionTitle'
import SubHeading from '../../Common/SubHeading'
import About from '../About'
import Experience from '../Experience'
import Education from '../Education'
import Skill from '../Skill'
import Interests from '../Interests/Index'
import Award from '../Award'

/**
* @author
* @function HomePage
**/

const HomePage = (props) => {

    return (
        <Container fluid className="p-0" >
            <About />
            <Experience />
            <Education />
            <Skill />
            <Interests />
            <Award />
        </Container >
    )

}

export default HomePage