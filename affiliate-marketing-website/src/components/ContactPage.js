import React from 'react';
import './ContactPage.css';

function ContactPage() {
  return (
    <div className="contact-page">
      <h2>Contact Us</h2>
      <form>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" name="name" required />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" name="email" required />
        </div>
        <div className="form-group">
          <label>Message:</label>
          <textarea name="message" required></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ContactPage;