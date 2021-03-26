import React from 'react';
import profilepic from './img/profilepic.jpeg'

function Blurb() {
    return (
        <div className='blurb'>
            <img src={profilepic} className='mainprofile' alt='profile'></img>
            <h2>My name is Robert Obrochta. I'm a current student at DePaul University studying computer science. 
                To get to know me better, please click on my titles to the right.</h2>
        </div>
    )
}

export default Blurb
