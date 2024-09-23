import React, { useState } from 'react';
import Nav from './Nav';
import Logo from '../assets/Logo.svg';
import { Link } from 'react-router-dom';
import '../style/Header.css';

const Header = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header">
            {/* Logo */}
            <Link to="/" className="logo-link">
                <img src={Logo} alt="Little Lemon Logo" className="primary-logo" />
            </Link>

            {/* Hamburger Icon */}
            <button className="hamburger-menu" onClick={toggleMenu} aria-label="Toggle menu">
                <div className={isMenuOpen ? 'bar open' : 'bar'}></div>
                <div className={isMenuOpen ? 'bar open' : 'bar'}></div>
                <div className={isMenuOpen ? 'bar open' : 'bar'}></div>
            </button>

            {/* Navigation Menu */}
            <nav className={isMenuOpen ? 'nav open' : 'nav'}>
                <Nav />
            </nav>
        </header>
    );
};

export default Header;
