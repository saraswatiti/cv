import React from 'react'
import Sections from '../../Common/Sections'
import SectionTitle from '../../Common/SectionTitle'
import AwardLists from '../../AwardLists'

/**
* @author
* @function Award
**/

const Award = (props) => {
    return (
        <>
            <Sections id="awards">
                <SectionTitle Heading="AWARDS & CERTIFICATIONS" />
                <ul className="fa-ul mb-0">
                    <AwardLists AwardsTitle="Google Analytics Certified Developer" />
                    <AwardLists AwardsTitle="Mobile Web Specialist - Google Certification" />
                    <AwardLists AwardsTitle="1 st Place - University of Colorado Boulder - Emerging Tech Competition 2009" />
                    <AwardLists AwardsTitle="1 st Place - University of Colorado Boulder - Adobe Creative Jam 2008 (UI Design Category)" />
                    <AwardLists AwardsTitle="2 nd Place - University of Colorado Boulder - Emerging Tech Competition 2008" />
                    <AwardLists AwardsTitle="1 st Place - James Buchanan High School - Hackathon 2006" />
                    <AwardLists AwardsTitle="3 rd Place - James Buchanan High School - Hackathon 2005" />
                </ul>
            </Sections>
        </>
    )

}

export default Award