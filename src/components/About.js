
import React from 'react';

const About = () =>  {
  return (
    <div className="pageSpace about-section" id="About">
      <div className="about-words">
        <p>I am a third-year undergraduate student majoring in computer science at DePaul University in Chicago. I began my 
          studies at DePaul as a music education major and am deeply fascinated with how different musical cultures interact 
          with one another.</p>
          <br></br>
          <p>In the world of computer science, I am fascinated with a similar concept; a concept relating to how people 
            interact with one another in this technologically-inclined world. Personally, I see computer science as a tool 
            to help those in need across the various facets of life. As I delve deeper into computer science, my goal is to 
            uncover the various methods which one can use to impact a broader audience. For me, the lure of computer science 
            is not just the learning process; rather it is the many things which have yet to be uncovered.</p>
            <br></br>
            <p>As for my hobbies, I continue to keep up with practicing trumpet and piano. I also enjoy going on daily bike 
              rides, during the warmer months, and am an avid nature-lover.</p>
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
