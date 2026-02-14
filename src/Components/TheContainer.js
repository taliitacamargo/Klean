import React from 'react';
import {useState} from 'react';
import '../App.css';
import NavBar from './NavBar';
import Footer from './Footer';
import Services from './Services.js';
import Quote from './Quote';
import Home from './Home.js';


export default function TheContainer() {
    const[currentPage, setCurrentPage] = useState('Home');

const renderPage = () => {
    if(currentPage === 'Services') {
        return <Services/>;
    }
    if(currentPage === 'Quote') {
        return <Quote/>;
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