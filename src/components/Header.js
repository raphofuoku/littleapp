import React, {useState} from 'react';
import Nav from "./Nav";
import Logo from "../assets/Logo.svg";
import {Link} from 'react-router-dom';
import '../style/Header.css';

const Header = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    }
    return (
        <header className="header">
            <Link>
               <img src={Logo} alt="logo" className="primary-logo"/>
            </Link>

                 {/* Hamburger icon */}
           <button className="hamburger-menu" onClick={toggleMenu}>

                <div className={isMenuOpen ? 'bar1 open' : 'bar1'}></div>
                <div className={isMenuOpen ? 'bar2 open' : 'bar2'}></div>
                <div className={isMenuOpen ? 'bar3 open' : 'bar3'}></div>
           </button>

                {/* Navigation Menu */}
            <nav className={isMenuOpen ? 'nav open' : 'nav'}>
                <Nav />
            </nav>

        </header>
    );
}

export default Header;