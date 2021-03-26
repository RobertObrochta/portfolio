
import React from 'react';
import Python from './img/python.png'
import ReactJS from './img/ReactJS.png'

const About = () =>  {
  return (
    <div className="pageSpace about-section" id="About">
      <div className="about-words">
        <h3>I am a current third year undergraduate student at DePaul University in Chicago. 
          I come from 2.5 years as a music education major, and recently moved fully to computer science. 
          In the world of music, I am fascinated with how different musical cultures interact with one another.</h3>
          <br></br>
          <h3>In the world of computer science, I am fascinated with the same concept of how people interact with each other,
            but now in the world of technology. I see computer science as a tool that can help people immensely in many different aspects. 
            During my computer science career, I have the goal of discovering the different ways that 
            I can more effectively impact a broad audience. Computer science draws me in because I love the learning process, 
            and there are just so many things to achieve in this field.</h3>
            <br></br>
            <h3>For my hobbies, I keep up with practicing trumpet and piano. I go on 10+ mile bike rides almost every day 
              during the warmer months and am an avid nature-lover.</h3>
          </div>
            
          {/* list all tech stack and pictures for each */}
          <div className="about-tech">
            <h2 className="tech-header">Technologies that I'm comfortable with</h2>
              <h3>Back End: Python, SQL, Java</h3><img src={Python} alt='Python' className='techstack'></img>
              <h3>Front End: React.js, React Native, and HTML/CSS/JS</h3><img src={ReactJS} alt='React.js' className='techstack'></img>
          </div>
    </div>
  );
  
}

export default About;
