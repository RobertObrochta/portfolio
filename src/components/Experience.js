import React from 'react';
import Blurb from './Blurb';

const Experience = () =>  {
  return (
    // two horizontal rows with cards for each (possible carousel if it gets big)
    // first row is work experience with links 
    // second row is projects with links
    // on hover for the projects, change opacity, link to github AND list technologies used

    // mobile view will just be blocks of two (no carsousel)
    <div className="pageSpace" id="Experience">
      <Blurb/>
    </div>
  );
  
}

export default Experience;