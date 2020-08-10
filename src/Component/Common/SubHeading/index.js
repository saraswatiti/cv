import React from 'react'

/**
* @author
* @function SubHeading
**/

const SubHeading = ({ contactEmail, subTitle }) => {
    return (
        <>
            {contactEmail ?
                <div className="subheading mb-5">
                    {subTitle}
                    <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
                </div>
                : <div className="subheading mb-3">{subTitle}</div>}
        </>
    )

}

export default SubHeading