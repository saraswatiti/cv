import React from 'react'
import Sections from '../../Common/Sections'
import SectionTitle from '../../Common/SectionTitle'
import {
    FaHtml5,
    FaCss3,
    FaJsSquare,
    FaAngular,
    FaReact,
    FaNodeJs,
    FaSass,
    FaLess,
    FaWordpress,
    FaGulp,
    FaGrunt,
    FaNpm
} from "react-icons/fa"
import SubHeading from '../../Common/SubHeading'
import WorkFlow from '../../Common/WorkFlow'


/**
* @author
* @function Skill
**/

const Skill = (props) => {
    return (
        <Sections id="skill">
            <SectionTitle Heading="Skills" />
            <SubHeading subTitle="Programming Languages & Tools" />
            <ul className="list-inline dev-icons">
                <li className="list-inline-item">
                    <FaHtml5 />
                </li>
                <li className="list-inline-item">
                    <FaCss3 />
                </li>
                <li className="list-inline-item">
                    <FaJsSquare />
                </li>
                <li className="list-inline-item">
                    <FaAngular />
                </li>
                <li className="list-inline-item">
                    <FaReact />
                </li>
                <li className="list-inline-item">
                    <FaNodeJs />
                </li>
                <li className="list-inline-item">
                    <FaSass />
                </li>
                <li className="list-inline-item">
                    <FaLess />
                </li>
                <li className="list-inline-item">
                    <FaWordpress />
                </li>
                <li className="list-inline-item">
                    <FaGulp />
                </li>
                <li className="list-inline-item">
                    <FaGrunt />
                </li>
                <li className="list-inline-item">
                    <FaNpm />
                </li>
            </ul>
            <SubHeading subTitle="Workflow" />
            <ul className="fa-ul mb-0">
                <WorkFlow WorkTitle="Mobile-First, Responsive Design" />
                <WorkFlow WorkTitle="Cross Browser Testing & Debugging" />
                <WorkFlow WorkTitle="Cross Functional Teams" />
                <WorkFlow WorkTitle="Agile Development & Scrum" />
            </ul>
        </Sections>
    )

}

export default Skill