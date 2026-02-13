import React from 'react'

function Navbar({currentPage, handlePageChange}) {
    return(
        <header className="header">
            <nav className="nav">
                <ul className="nav-list">
                    <li className="nav-item-1">
                        <a href="#about" onClick={() => handlePageChange('About')}
                            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>
                        About
                        </a>
                    </li>
                    <li className="nav-item-2">
                        <a href="#contact" onClick={() => handlePageChange('Contact')}
                            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>
                        Contact
                        </a>
                    </li>
                    <li className="nav-item-3">
                        <a href="#home" onClick={() => handlePageChange('Home')}
                            className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}>
                        Home
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
export default Navbar;