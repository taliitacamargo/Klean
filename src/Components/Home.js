import React from 'react'
import '../App.css';

import img1 from '../assets/img1.jpg';
import img2 from '../assets/img1.jpg';
import img4 from '../assets/img1.jpg';


export default function Home() {
    return (
        <div className="home">
            
            <h1 className="home-title">Welcome to [BUSINESS NAME]</h1>
            <div className="home-description">
            <p className="home-description">[YOUR BUSINESS NAME] is a cleaning service that provides
                top-notch cleaning solutions for your home or office. Our team of professional
                cleaners is dedicated to making your space spotless and comfortable.
                Whether you need regular cleaning, deep cleaning, or move-in/move-out cleaning,
                [YOUR BUSINESS NAME] has got you covered. Contact us today to schedule your cleaning service
                and experience the difference with [YOUR BUSINESS NAME]!
                </p>
            </div>
            {/* images */}
        
            <img className="heroimg" src={img1} alt="cleaning service"/>
            <img className="heroimg" src={img2} alt="cleaning service"/>
            <img className="heroimg" src={img4} alt="cleaning service"/>
            {/* <img className="heroimg" src="src/assets/img6.jpg" alt="cleaning service"/> */}
            <div>
            <button className="bookbutton">Get a Free Quote</button>
            </div>
        
            <p >
                just words
            </p>


        </div>
    );
}