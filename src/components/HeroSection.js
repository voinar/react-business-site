import React from 'react';
import {Button} from './Button';
import './HeroSection.css';
import '../App.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src='../videos/video-1.mp4' autoPlay loop muted />
            <h1>JUST DO IT</h1>
            <p>don't let your dreams be dreams</p>
            <div className='hero-btns'>
                <Button 
                className='btns' 
                buttonStyle='btn--outline' 
                buttonSize='btn--large'>
                    Get started
                </Button>
                <Button className='hero-btns'
                buttonStyle='btn--primary' 
                buttonSize='btn--large'>
                    Watch Trailer <i className='far fa-play-circle'/>
                </Button>
            </div>
        </div>
    );
}

export default HeroSection;
