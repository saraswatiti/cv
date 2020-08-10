import React from 'react'
import Sections from '../../Common/Sections'
import SubHeading from '../../Common/SubHeading';
import SectionTitle from '../../Common/SectionTitle';
import SocialLinks from '../../Common/SocialLinks';


/**
* @author
* @function About
**/

const About = (props) => {
    const id1 = 'about';
    return (
        <Sections id={id1} >
            <SectionTitle FirstName='Saraswati' LastName='Timsina' />
            <SubHeading contactEmail="saraswatitimsina8@gmail.com" subTitle="3542 Berry Street · Cheyenne Wells, CO 80810 · (317) 585-8468 ·" />
            <p className="lead mb-5">I am experienced in leveraging
            agile frameworks to provide a robust synopsis for
            high level overviews. Iterative approaches to corporate
            strategy foster collaborative thinking to further the overall
                value proposition.</p>
            <SocialLinks />
        </Sections>
    )

}

export default About