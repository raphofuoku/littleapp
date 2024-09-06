import { Link } from "react-router-dom";

const Nav = () => {
    return (
       <nav className="main-nav">
        <ul>
            <li>
             <Link to="/" className="nav-item">Home</Link>
            </li>
            <li>
              <Link to="/about" className="nav-item">About Us</Link>
            </li>
            <li>
              <Link to="/menu" className="nav-item">menu</Link>
            </li>
            <li>
              <Link to="/booking" className="nav-item">Reservation</Link>
            </li>
            <li>
              <Link to="/order-online" className="nav-item">Order Online</Link>
            </li>
            <li>
              <a href="#login" to="/Log-in" className="nav-item">LogIn</a>
            </li>
        </ul>
       </nav>
    );
}

export default Nav;