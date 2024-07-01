// src/BannerPage.js
import React from 'react';
// import Navbar from './Navbar';
// import Footer from './Footer';

const BannerPage = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <header style={styles.header}>
        <div style={styles.overlay}>
          <h1 style={styles.heading}>Welcome to Our Website</h1>
          <p style={styles.subtext}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel purus consequat, aliquet leo sed, vestibulum turpis. Proin sagittis, nulla vel accumsan accumsan, nunc orci interdum turpis.</p>
        </div>
      </header>
      <main style={styles.main}>
        <section style={styles.section}>
          <h2 style={styles.sectionHeading}>About Us</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel purus consequat, aliquet leo sed, vestibulum turpis. Proin sagittis, nulla vel accumsan accumsan, nunc orci interdum turpis.</p>
        </section>
        <section style={styles.section}>
          <h2 style={styles.sectionHeading}>Services</h2>
          <ul>
            <li>Service 1</li>
            <li>Service 2</li>
            <li>Service 3</li>
          </ul>
        </section>
        <section style={styles.section}>
          <h2 style={styles.sectionHeading}>Contact Us</h2>
          <p>Email: info@example.com</p>
          <p>Phone: +1234567890</p>
        </section>
      </main>
      {/* <Footer /> */}
    </div>
  );
};

const styles = {
  header: {
    backgroundImage: 'url("https://example.com/banner.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '400px',
    display: 'flex',
    alignItems: 'center',   
    justifyContent: 'center',
    color: '#fff',
    textAlign: 'center'
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto'
  },
  heading: {
    fontSize: '3rem',
    marginBottom: '20px'
  },
  subtext: {
    fontSize: '1.5rem'
  },
  main: {
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto'
  },
  section: {
    marginBottom: '40px'
  },
  sectionHeading: {
    fontSize: '2rem',
    marginBottom: '10px'
  }
};

export default BannerPage;
