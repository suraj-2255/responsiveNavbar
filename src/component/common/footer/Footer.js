// src/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.inner}>
        <p>&copy; 2024 Your Company. All rights reserved.</p>
        <p>Address: 123 Main St, Cityville, Country</p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#f8f9fa',
    padding: '20px 0',
    marginTop: 'auto',
    textAlign: 'center',
    borderTop: '1px solid #ddd'
  },
  inner: {
    maxWidth: '800px',
    margin: '0 auto'
  }
};

export default Footer;
