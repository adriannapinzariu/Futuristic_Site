import React from 'react';
import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <a href="/" className="nav-link">Home</a>
            <a href="/about" className="nav-link">About</a>
            <a href="/services" className="nav-link">Services</a>
            <a href="/contact" className="nav-link">Contact</a>
        </nav>
    );
}

export default Navbar;
