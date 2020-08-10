import React from 'react'
import SubHeading from '../SubHeading'

/**
* @author
* @function ExperienceDtl
**/

const ExperienceDtl = ({ expDtlTtl, p, duration }) => {
    return (
        <>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="flex-grow-1">
                    <h3 className="mb-0">{expDtlTtl}</h3>
                    <SubHeading subTitle="Intelitec Solutions" />
                    <p>{p}</p>
                </div>
                <div className="flex-shrink-0">
                    <span className="text-primary">{duration}</span>
                </div>
            </div>
        </>
    )

}

export default ExperienceDtl