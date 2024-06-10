import "./Testimonials.css"
import React, { useState } from 'react';
import { testimonials } from "../../data";



const Testimonials = () => {
    const [current, setCurrent] = useState(0);

    const nextTestimonial = () => {
        setCurrent((current + 1) % testimonials.length);
      };
    
      const prevTestimonial = () => {
        setCurrent((current - 1 + testimonials.length) % testimonials.length);
      };
    
  return (
    <div className="testimonial-container">
      <div className="testimonial">
        <img src={testimonials[current].image} alt={testimonials[current].name} />
        <p>{testimonials[current].text}</p>
        <h4>{testimonials[current].name}</h4>
      </div>
      <div className="testimonial-buttons">
        <button onClick={prevTestimonial}>Previous</button>
        <button onClick={nextTestimonial}>Next</button>
      </div>
    </div>
  )
}

export default Testimonials