import React from 'react'
import Sections from '../../Common/Sections'
import SectionTitle from '../../Common/SectionTitle'

/**
* @author
* @function Interests
**/

const Interests = (props) => {
    return (
        <>
            <Sections id="interests">
                <SectionTitle Heading="interests" />
                <p>Apart from being a web developer,
                I enjoy most of my time being outdoors. In the winter,
                I am an avid skier and novice ice climber.
                During the warmer months here in Colorado,
                I enjoy mountain biking, free climbing, and kayaking.</p>

                <p>When forced indoors,
                I follow a number of sci-fi and
                fantasy genre movies and television shows,
                I am an aspiring chef, and I spend a large
                amount of my free time exploring the latest
                technology advancements in the front-end web
                development world.</p>
            </Sections>
        </>
    )

}

export default Interests