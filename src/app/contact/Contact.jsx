'use client';
import { useState } from 'react';
import './Contact.css'

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your form submission logic here
  };
  return (
    <div className="container">
      <div className='text'>
        <section className="contact-section">
          <h2>Contact Facility Management Consultants in Bangalore, India</h2>
          <p>For any information or queries pertaining to our products / services: We’ll reply within 24 hours.</p>
          <p>Are you looking for the best facility management services and solutions in Bangalore, Karnataka, India? Do you want the following facility management services for your company or business?</p>
        </section>
        {/* section facility services */}
        <hr />
        <section className='facility-services'>
          <h2>Facility Management Services</h2>
          <ul>
            <li>Licensed Electrical Contractor</li>
            <li>Engineering Services</li>
            <li>Facility Management</li>
            <li>General Maintenance Services</li>
            <li>Corporate Services</li>
            <li>Energy Management and Audit Service</li>
            <li>Consultancy Services</li>
            <li>Environmental Services</li>
          </ul>
        </section>
        {/* contact section */}
        <hr />
        <section className="address-section">
          <div className="contact-details">
            <div className="contact-item">
              <h3>Address:</h3>
              <p>Rish Tech Facility Management Pvt. Ltd.,</p>
              <p>No. 43 Maruthi Towers 4th Cross, Sampige Rd,</p>
              <p>Malleshwaram, Bengaluru, Karnataka - 560003</p>
            </div>
            <div className="contact-item">
              <h3>Phone:</h3>
              <p>Office: +91 9875704712</p>
            </div>
          </div>
          <div className="contact-details">
            <div className="contact-item">
              <h3>Business Contact:</h3>
              <p>+91-9875704712</p>
              <p>+91-9875704712</p>
              <p>+91-9875704712</p>
            </div>
            <div className="contact-item">
              <h3>Careers:</h3>
              <p>+91-9875704712</p>
              <p>+91-9875704712</p>
            </div>
          </div>
          <div className="contact-email">
            <h3>Email Address:</h3>
            <p>rishabh.kumar10101@icloud.com</p>
          </div>
          <div className="working-hours">
            <h3>Working Hours:</h3>
            <p>Mon - Sat Day: 09.00 to 18.00</p>
          </div>
        </section>
        {/* section form  */}
        <hr />
        <h1>
          Leave Your Message
        </h1>
        <p>
          If you have any questions about the services we provide simply use the form below.
          We try and respond to all queries and comments within 24 hours.
        </p>
        <hr />
        <div className="contact-container">
          <h1>Contact Us</h1>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone:</label>
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact