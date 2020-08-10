import React from 'react'

/**
* @author
* @function Sections
**/

const Sections = ({ id, children }) => {

    return (
        <section className='resume-section' id={`#${id}`} >
            <div className="resume-section-content">
                {children}
            </div>
        </section >
    )

}

export default Sections