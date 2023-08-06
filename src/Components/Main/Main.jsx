'use client';
import './Main.css'
import React, { useEffect, useState } from 'react';
const Main = () => {
  const [animationClass, setAnimationClass] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const elementOffset = document.querySelector('.category-list').getBoundingClientRect().top;

      if (elementOffset < windowHeight) {
        setAnimationClass('animate');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className="hero" >
        <div className="hero-content">
          <h1>
            integrated FACILITY
            MANAGEMENT SERVICES
          </h1>
          <p>Every Company has its unique foot print and we understand your
            need for your business.
          </p>
          <button className="cta-btn">Get Started</button>
        </div>
      </div>
      {/* features */}

      <section className="section-feature">
        <h2>Why Choose company-Name for Facility Management Services in Bangalore?</h2>
        <ul className="list">
          <li>
            <span className="icon">🏢</span>
            <p>Single point of contact for all Facility Needs.</p>
          </li>
          <li>
            <span className="icon">🚀</span>
            <p>Constantly Innovating.</p>
          </li>
          <li>
            <span className="icon">🏢</span>
            <p>Proponent of Modern Facility.</p>
          </li>
          <li>
            <span className="icon">👥</span>
            <p>Client Centric Approach.</p>
          </li>
          <li>
            <span className="icon">📅</span>
            <p>25 years of experience in interaction with Statutory Auth.</p>
          </li>
          <li>
            <span className="icon">💼</span>
            <p>Management Practice and Strong Leadership support.</p>
          </li>
        </ul>
      </section>

      {/* top-categories */}
      <section className={`top-categories ${animationClass}`}>
        <h2></h2>
        <div className="category-list">
          <div className="category-item">
            <img src="/Structural-Engineer.jpg" alt="Engineering Services" />
            <p>Engineering Services</p>
          </div>
          <div className="category-item">
            <img src="/Environmental Services.jpeg" alt="Environmental Services" />
            <p>Environmental Services</p>
          </div>
          <div className="category-item">
            <img src="/Corporate-Services.jpeg" alt="Corporate Services" />
            <p>Corporate Services</p>
          </div>
          <div className="category-item">
            <img src="/General Maintainence Services.jpeg" alt="General Maintainence Services" />
            <p>General Maintainence Services</p>
          </div>
          <div className="category-item">
            <img src="/Energy Management Services.jpeg" alt="Energy Management Services" />
            <p>Energy Management Services</p>
          </div>
          <div className="category-item">
            <img src="/public/Project Execution.jpeg" alt="Project Execution" />
            <p>Project Execution</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Main