import React from 'react'
import SubHeading from '../SubHeading'

/**
* @author
* @function EducationItem
**/

const EducationItem = ({ subTitle, edcTitle, p, gpa, duration }) => {
    return (
        <>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="flex-grow-1">
                    <h3 className="mb-0">{edcTitle}</h3>
                    <SubHeading subTitle={subTitle} />
                    {p && <div>{p}</div>}
                    <p>{gpa}</p>
                </div>
                <div className="flex-shrink-0">
                    <span className="text-primary">{duration}</span>
                </div>
            </div>
        </>
    )

}

export default EducationItem