import React from 'react';
import './Contact.css'; // Create a CSS file for styling this page

const Contact = () => {
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p>If you have any questions or need assistance, feel free to reach out to us.</p>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
        
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" required></textarea>
        
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Contact;