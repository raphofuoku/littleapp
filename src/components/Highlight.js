import greeksalad from '../assets/greeksalad.jpg';
import bruchetta from '../assets/bruchetta.svg';
import lemondessert from '../assets/lemondessert.jpg';
import '../style/Highlights.css';
import { Link } from 'react-router-dom';

const Highlights = ()  => {
  return (
    <section className="highlights">
      <div className="highlights-header">
        <h2 className="highlights-title">This Week's Specials!</h2>
        <button className="primary-button">
            <Link to="/menu" aria-label="Menu Button">Online Menu</Link>
        </button>
      </div>

      <div className="highlights-content">
        <div className="highlights-card">
          <div className="highlights-card-image-container">
            <img src={greeksalad} alt="Greek Salad" className="highlights-card-image"/>
          </div>
          <div className="highlights-card-content">
            <div className="highlights-card-header">
              <h4 className="highlights-card-title">Greek Salad</h4>
              <p className="highlights-card-price">12.99$</p>
            </div>
            <div className="highlights-card-main">
              <p className="highlights-card-description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Nesciunt accusamus similique provident sint neque sit mollitia,
                illo vero ullam autem fugit placeat.
              </p>
              <button className="primary-button">Order a delivery</button>
            </div>
          </div>
        </div>

        <div className="highlights-card">
          <div className="highlights-card-image-container">
            <img src={bruchetta} alt="Bruschetta" className="highlights-card-image"/>
          </div>
          <div className="highlights-card-content">
            <div className="highlights-card-header">
              <h4 className="highlights-card-title">Bruchetta</h4>
              <p className="highlights-card-price">5.99$</p>
            </div>
            <div className="highlights-card-main">
              <p className="highlights-card-description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Nesciunt accusamus similique provident sint neque sit mollitia,
                illo vero ullam autem fugit placeat.
              </p>
              <button className="primary-button">Order a delivery</button>
            </div>
          </div>
        </div>

        <div className="highlights-card">
          <div className="highlights-card-image-container">
            <img src={lemondessert} alt="Lemon Dessert" className="highlights-card-image"
            />
          </div>
          <div className="highlights-card-content">
            <div className="highlights-card-header">
              <h4 className="highlights-card-title">Lemon Dessert</h4>
              <p className="highlights-card-price">4.99$</p>
            </div>
            <div className="highlights-card-main">
              <p className="highlights-card-description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Nesciunt accusamus similique provident sint neque sit mollitia,
                illo vero ullam autem fugit placeat.
              </p>
              <button className="primary-button">Order a delivery</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Highlights;
