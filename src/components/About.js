
import React from 'react';

const About = () =>  {
  return (
    <div className="pageSpace about-section" id="About">
      <div className="about-words">
        <p>I'm a current third year undergraduate student at DePaul University in Chicago. 
          I come from 2.5 years as a music education major, and recently moved fully to computer science. 
          In the world of music, I'm fascinated with how different musical cultures interact with one another.</p>
          <br></br>
          <p>In the world of computer science, I'm fascinated with the same concept of how people interact with each other,
            but now in the world of technology. I see computer science as a tool that can help people immensely in many different aspects. 
            During my computer science career, I have the goal of discovering the different ways that 
            I can more effectively impact a broad audience. Computer science draws me in because I love the learning process, 
            and there are just so many things to achieve in this field.</p>
            <br></br>
            <p>For my hobbies, I keep up with practicing trumpet and piano. I go on 10+ mile bike rides almost every day 
              during the warmer months and am an avid nature-lover.</p>
          </div>
            
          {/* list all tech stack */}
            <div className="about-tech">
              <h2 className="tech-header">Technologies that I'm comfortable with</h2>
                <div className="inline tech-space">
                  <div className="tech-space">
                    <h3><b>Back End</b></h3> 
                      <ul className="within-space">
                        <li>Python</li>
                        <li>SQL</li>
                        <li>Java</li>
                      </ul>
                  </div>
                  <div className="tech-space">
                    <h3><b>Front End</b></h3>
                      <ul className="within-space">
                        <li>React.js</li>
                        <li>HTML/CSS/JS</li>
                        <li>React Native</li>
                      </ul>
                  </div>
                  <div className="tech-space">
                    <h3><b>Other</b></h3>
                      <ul className="within-space">
                        <li>Git</li>
                        <li>Linux</li>
                      </ul>
                  </div>
                </div>
            </div>
          </div>
  );
  
}

export default About;
