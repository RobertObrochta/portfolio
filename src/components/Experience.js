import React from 'react';
import Spotify from './img/SpotifyMapExample1.png'
import AutoZoom from './img/AutoZoom.mp4'

const Experience = () =>  {
  return (
    // two horizontal rows with cards for each (possible carousel if it gets big)
    // first row is work experience with links 
    // second row is projects with links
    // on hover for the projects, change opacity, link to github AND list technologies used

    // mobile view will just be blocks of two (no carsousel)
    <div className="pageSpace" id="Experience">
      {/* SpotifyMapping */}
      <div className="exp-block col1">
        <img src={Spotify} alt="Spotify" className="exp-image"></img>
        <div className="exp-overlay">
          <div className='exp-text'>
          <p>A program that takes your Spotify listening history and maps it into a neat node graph</p>
            <br></br>
            {/* These hrefs will be buttons */}
            <a href="https://github.com/RobertObrochta/SpotifyMapping" target="_blank" rel="noreferrer nofollow">GitHub</a>
            </div>
        </div>
      </div>
      <h3 className="exp-name">SpotifyMapping</h3>

      {/* AutoZoom */}
      <div className="exp-block col1">
        <video src={AutoZoom} alt="Spotify" className="exp-image" autoPlay="true" muted='true' loop='true'></video>
        <div className="exp-overlay">
          <div className='exp-text'>
          <p>Opens up Zoom link (or any URL) given a day of the week and a time (in 24 hour time). Executes that task weekly</p>
            <br></br>
            {/* These hrefs will be buttons */}
            <a href="https://github.com/RobertObrochta/AutoZoom" target="_blank" rel="noreferrer nofollow">GitHub</a>
            </div>
        </div>
      </div>
      <h3 className="exp-name">AutoZoom</h3>

      {/* Scattergories */}
          {/* <p>The classic game of Scattergories! Reads input from 4 different player files, and grades them after 1 minute</p> */}
      </div>
  );
  
}

export default Experience;