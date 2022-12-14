import React from 'react';
import '../App.css';
import './HeroSection.css';
import Video from './popups/video/Video';
import { useState } from 'react';

function HeroSection() {
  const [buttonPopup, setButtonPopup] = useState(false)

  return (
    <div className='hero-container'>
        <h1>CHECK OUT OUR NEW SONG</h1>
        <div className="hero-btns">
            <button className='btns' buttonStyle='btn--primary' buttonSize='btn--large' onClick={() => setButtonPopup(true)}>WATCH OFFICIAL VIDEO<i className='far fa-play-circle'/></button>
            <Video trigger={buttonPopup} setTrigger={setButtonPopup}>
                  <video autoPlay controls src='../../assets/Polyphia - Goose (Official Music Video).mp4'></video>
            </Video>
        </div>
    </div>
  )
};

export default HeroSection