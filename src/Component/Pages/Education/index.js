import React from 'react'
import Sections from '../../Common/Sections'
import SectionTitle from '../../Common/SectionTitle'
import EducationItem from '../../Common/EducationItem'

/**
* @author
* @function Education
**/

const Education = (props) => {
    return (
        <>
            <Sections id="education">
                <SectionTitle Heading="Education" />
                <EducationItem subTitle="Bachelor of Science"
                    edcTitle="University of Colorado Boulder"
                    p="Computer Science - Web Development Track"
                    gpa="GPA: 3.23"
                    duration="August 2006 - May 2010"
                />
                <EducationItem subTitle="Technology Magnet Program"
                    edcTitle="James Buchanan High School"
                    p=""
                    gpa="GPA: 3.56"
                    duration="August 2002 - May 2006"
                />
            </Sections>
        </>
    )

}

export default Education