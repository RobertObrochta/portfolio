import React from 'react';
import Spotify from './img/SpotifyMapExample1.png'
import AutoZoom from './img/AutoZoom.mp4'
import DupsRemover from './img/DupsRemover.mp4'
import MyPantry from './img/MyPantry.png'

// images are 450px by 230px
const Experience = () =>  {
  return (
    // on hover for the projects, change opacity, link to github AND list technologies used

    <div className="pageSpace exp-grid" id="Experience">
      {/* SpotifyMapping */}
      <div className="exp-block">
        <img src={Spotify} alt="Spotify" className="exp-image"></img>
        <div className="exp-overlay">
          <div className='exp-text'>
          <h3>A program that takes your Spotify listening history and maps it into a unique node graph</h3>
            <br></br>
            {/* These hrefs will be buttons */}
            <button className="exp-btn"><h3><a href="https://github.com/RobertObrochta/SpotifyMapping" target="_blank" rel="noreferrer nofollow">GitHub</a></h3></button>
            </div>
        </div>
        <h2 className="exp-name">SpotifyMapping</h2>
      </div>

      {/* AutoZoom */}
      <div className="exp-block">
        <video src={AutoZoom} alt="AutoZoom" className="exp-video" autoPlay="true" muted='true' loop='true'></video>
        <div className="exp-overlay">
          <div className='exp-text'>
          <h3>Opens up Zoom link (or any URL) given a day of the week and a time (in 24 hour time). Executes that task weekly</h3>
            <br></br>
            <button className="exp-btn"><h3><a href="https://github.com/RobertObrochta/AutoZoom" target="_blank" rel="noreferrer nofollow">GitHub</a></h3></button>
            </div>
        </div>
        <h2 className="exp-name">AutoZoom</h2>
      </div>

      {/* MyPantry */}
      <div className="exp-block">
        <img src={MyPantry} alt="MyPantry" className="exp-image"></img>
        <div className="exp-overlay">
          <div className='exp-text'>
          <h3>Creates meals with ingredients and logs them throughout the day.</h3>
            <br></br>
            {/* These hrefs will be buttons */}
            <button className="exp-btn"><h3><a href="https://github.com/RobertObrochta/MyPantry" target="_blank" rel="noreferrer nofollow">GitHub</a></h3></button>
            </div>
        </div>
        <h2 className="exp-name">MyPantry</h2>
      </div>

      {/* DupsRemover */}
      <div className="exp-block">
      <video src={DupsRemover} alt="DupsRemover" className="exp-video" autoPlay="true" muted='true' loop='true'></video>
        <div className="exp-overlay">
          <div className='exp-text'>
          <h3>Removes duplicate files from your filesystem.</h3>
            <br></br>
            <button className="exp-btn"><h3><a href="https://github.com/RobertObrochta/DupsRemover" target="_blank" rel="noreferrer nofollow">GitHub</a></h3></button>
            </div>
        </div>
        <h2 className="exp-name">DupsRemover</h2>
      </div>


      {/* Scattergories */}
          {/* <h3>The classic game of Scattergories! Reads input from 4 different player files, and grades them after 1 minute<h3> */}
      </div>
  );
  
}

export default Experience;