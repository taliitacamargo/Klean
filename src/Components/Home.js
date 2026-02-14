import React from 'react'
import '../App.css';

export default function Home() {
    return (
        <div className="home">
            <h1 className="home-title">Welcome to Klean!</h1>
            <p className="home-description">Klean is a cleaning service that provides
                top-notch cleaning solutions for your home or office. Our team of professional
                cleaners is dedicated to making your space spotless and comfortable.
                Whether you need regular cleaning, deep cleaning, or move-in/move-out cleaning,
                Klean has got you covered. Contact us today to schedule your cleaning service
                and experience the difference with Klean!</p>
            {/* images */}
        
            <img className="heroimg" src="src/assets//img1.jpg" alt="cleaning service"/>
            <img className="heroimg" src="src/assets/img2.jpg" alt="cleaning service"/>
            <img className="heroimg" src="src/assets/img4.jpg" alt="cleaning service"/>
        
            <p >
                just words
            </p>


        </div>
    );
}