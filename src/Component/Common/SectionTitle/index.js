import React from 'react'

/**
* @author
* @function SectionTitle
**/

const SectionTitle = ({ FirstName, LastName, Heading }) => {
    return (
        <>
            {Heading ?
                <h2 className="mb-5">
                    {Heading}
                </h2> : <h1 className="mb-0">
                    {FirstName}
                    <span className="text-primary">{LastName}</span>
                </h1>
            }
        </>
    )

}

export default SectionTitle