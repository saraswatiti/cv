import React from 'react'
import { FaCheck } from "react-icons/fa"
/**
* @author
* @function WorkFlow
**/

const WorkFlow = ({ WorkTitle }) => {
    return (
        <>
            <li>
                <span className="fa-li">
                    <FaCheck />
                </span>
                {WorkTitle}
            </li>
        </>
    )

}

export default WorkFlow