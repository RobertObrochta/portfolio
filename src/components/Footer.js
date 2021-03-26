import React from 'react'
import githubLogo from './img/githublogo.png'
import linkedinLogo from './img/linkedinlogo.png'

const Footer = () => {
    return (
        <footer>
                <a href="https://github.com/RobertObrochta" target="blank"><img src={githubLogo} alt="GitHub" className="github"></img></a>
                <a href="https://www.linkedin.com/in/robert-obrochta/" target="blank"><img src={linkedinLogo} alt="LinkedIn" className="linkedin"></img></a>
        </footer>
    )
}

export default Footer
