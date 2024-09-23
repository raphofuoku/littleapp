import React from 'react';
import '../style/Testimonials.css';
import photo1 from '../assets/photo1.jpg';
import photo2 from '../assets/photo2.png'

//for demo purposes
const testimonialsData = [
  {
    rating: "⭐⭐⭐⭐⭐",
    name: "John Doe",
    review: "Amazing service and delicious food!",
    image: photo2,
  },
  {
    rating: "⭐⭐⭐⭐",
    name: "Jane Smith",
    review: "Great experience, but could improve the ambiance.",
    image: photo1,
  },
  {
    rating: "⭐⭐⭐⭐⭐",
    name: "Robert Green",
    review: "Best dining experience I've had in years!",
    image: photo2,
  },
  {
    rating: "⭐⭐⭐⭐⭐",
    name: "Emily White",
    review: "Fantastic food and friendly staff!",
    image: photo1,
  }
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2 className="testimonials-title">Testimonials</h2>
      <div className="testimonials-grid">
        {testimonialsData.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
            <h4 className="testimonial-name">{testimonial.name}</h4>
            <p className="testimonial-rating">{testimonial.rating}</p>
            <p className="testimonial-review">{testimonial.review}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
