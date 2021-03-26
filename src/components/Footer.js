import React from 'react'
import githubLogo from './img/githublogo.png'
import linkedinLogo from './img/linkedinlogo.png'

const Footer = () => {
    return (
        <footer>
                <a href="https://github.com/RobertObrochta" target="_blank" rel="noreferrer nofollow"><img src={githubLogo} alt="GitHub" className="github"></img></a>
                <a href="https://www.linkedin.com/in/robert-obrochta/" target="_blank" rel="noreferrer nofollow"><img src={linkedinLogo} alt="LinkedIn" className="linkedin"></img></a>
        </footer>
    )
}

export default Footer
