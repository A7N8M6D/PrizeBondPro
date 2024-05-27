import React from 'react';
import './Footer.css'; // Import CSS file

const Footer = () => {
  return (
    <footer className="footer"> {/* Use className instead of style */}
      <div className="container">
        <div className="left">
          <h3>About Us</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada feugiat nibh, sit amet ultrices velit volutpat non.</p>
        </div>
        <div className="right">
          <h3>Contact Information</h3>
          <p>Email: contact@prizebond.com</p>
          <p>Phone: +123456789</p>
          <p>Address: 123 Prize Bond Street, City, Country</p>
        </div>
      </div>
      <div className="bottom">
        <p>Prize Bond Website &copy; 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
