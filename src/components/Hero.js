import { Link } from 'react-router-dom';
import restaurantfood from "../assets/restauranfood.jpg";
import '../style/Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-content">
               <h1 className="hero-title">Little Lemon</h1>
               <h3 className="hero-subtitle">Chicago</h3>
               <p className="hero-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
                <button className="primary-button">
                    <Link to="/booking" aria-label="Reservation Button">Reserve a table</Link>
                </button>
            </div>
            <div className="hero-image-container">
               <img src={restaurantfood} alt="hero" className="hero-image"/>
            </div>
        </section>
    );
}

export default Hero;