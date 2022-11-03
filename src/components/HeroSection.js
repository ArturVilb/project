import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
        <h1>CHECK OUT OUR NEW SONG</h1>
        <p>Buy tickets to upcoming show!</p>
        <div className="hero-btns">
            <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>BUY TICKETS</Button>
            <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>WATCH TRAILER<i className='far fa-play-circle'/></Button>
        </div>
    </div>
  )
};

export default HeroSection