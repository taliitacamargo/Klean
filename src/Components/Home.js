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
            <a className="home-link" href="#contact">Contact Us</a>
            <p >
                just words
            </p>


        </div>
    );
}