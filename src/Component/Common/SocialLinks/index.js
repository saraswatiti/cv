import React from 'react'
import { Link } from 'react-router-dom'
import { FaLinkedinIn, FaGithub, FaTwitter, FaFacebookF } from "react-icons/fa";

/**
* @author
* @function SocialLinks
**/

const SocialLinks = (props) => {
    return (
        <>
            <div className="social-icons">
                <Link to="/" className="social-icon">
                    <FaLinkedinIn />
                </Link>
                <Link to="/" className="social-icon">
                    <FaGithub />
                </Link>
                <Link to="/" className="social-icon">
                    <FaTwitter />
                </Link>
                <Link to="/" className="social-icon">
                    <FaFacebookF />
                </Link>
            </div>
        </>
    )

}

export default SocialLinks