import React from 'react'
import { FaTrophy } from "react-icons/fa"
/**
* @author
* @function AwardLists
**/

const AwardLists = ({ AwardsTitle }) => {
    return (
        <>
            <li>
                <span className="fa-li">
                    <FaTrophy className="text-warning" size="1rem" />
                </span>
                {AwardsTitle}
            </li>
        </>
    )

}

export default AwardLists