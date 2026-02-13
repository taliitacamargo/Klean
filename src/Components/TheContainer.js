import React from 'react';
import {useState} from 'react';
import '../App.css';
import NavBar from './NavBar';
import Footer from './Footer';
import About from './About';
import Contact from './Contact';
import Home from './Home.js';


export default function TheContainer() {
    const[currentPage, setCurrentPage] = useState('Home');

const renderPage = () => {
    if(currentPage === 'About') {
        return <About/>;
    }
    if(currentPage === 'Contact') {
        return <Contact/>;
    }
    if(currentPage === 'Home') {
        return <Home/>
    }
    return <Home/>;
};
const handlePageChange = (page) => setCurrentPage(page);
return(
    <div>
    <NavBar currentPage = {currentPage} handlePageChange = {handlePageChange} />
    {renderPage()}
    <Footer/>
    </div>
);

}