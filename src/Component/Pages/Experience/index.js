import React from 'react'
import SectionTitle from '../../Common/SectionTitle'
import Sections from '../../Common/Sections'
import SubHeading from '../../Common/SubHeading'
import ExperienceDtl from '../../Common/ExperienceDtl'



/**
* @author
* @function Experience
**/

const Experience = (props) => {
    return (
        <Sections id="experience">
            <SectionTitle Heading="Experience"></SectionTitle>
            <ExperienceDtl expDtlTtl="Senior Web Developer"
                subHeading="Intelitec Solutions"
                p="Bring to the table win-win survival
                    strategies to ensure proactive domination. 
                    At the end of the day, going forward,
                    a new normal that has evolved from generation
                    X is on the runway heading towards a streamlined 
                    cloud solution. User generated content in 
                    real-time will have multiple touchpoints for offshoring."
                duration="March 2013 - Present"
            />
            <ExperienceDtl expDtlTtl="Web Developer"
                subHeading="Intelitec Solutions"
                p="Capitalize on low hanging fruit to identify
                        a ballpark value added activity to beta test.
                        Override the digital divide with additional clickthroughs 
                        from DevOps. Nanotechnology immersion along the information
                        highway will close the loop on focusing solely on the 
                        bottom line."
                duration="December 2011 - March 2013"
            />
            <ExperienceDtl expDtlTtl="Junior Web Designer"
                subHeading="Shout! Media Productions"
                p="Podcasting operational change management inside
                    of workflows to establish a framework. Taking seamless
                    key performance indicators offline to maximise the
                    long tail. Keeping your eye on the ball while performing
                    a deep dive on the start-up mentality to derive
                    convergence on cross-platform integration.
                    Capitalize on low hanging fruit to identify."
                duration="July 2010 - December 2011"
            />
            <ExperienceDtl expDtlTtl="Web Design Intern"
                subHeading="Shout! Media Productions"
                p="Collaboratively administrate empowered markets via 
                    plug-and-play networks. Dynamically procrastinate B2C users
                    after installed base benefits. Dramatically visualize 
                    customer directed convergence without revolutionary ROI."
                duration="September 2008 - June 2010"
            />
        </Sections>
    )

}

export default Experience