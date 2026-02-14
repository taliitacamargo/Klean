import React from 'react'

function Navbar({ currentPage, handlePageChange }) {
    return (
        <header className="header">
            <nav className="nav">
                {/*insert logo here  */}
                    <div className="nav-left">
                        <span className='logo'>logo</span>
                    </div>
                <ul className="nav-list">

                    <li className="nav-item">
                        <a href="#services" onClick={() => handlePageChange('Services')}
                            className={currentPage === 'Services' ? 'nav-link active' : 'nav-link'}>
                            Services
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#home" onClick={() => handlePageChange('Home')}
                            className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}>
                            Learn More
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#quote" onClick={() => handlePageChange('Quote')}
                            className={currentPage === 'Quote' ? 'nav-link active' : 'nav-link'}>
                            Get a Quote
                        </a>
                    </li>

                </ul>
            </nav>
        </header>
    );
}
export default Navbar;