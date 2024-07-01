// src/AboutPage.js
import React from 'react';
import Navbar from '../common/Navbar/Navbar';
import Footer from '../common/footer/Footer';

const About = () => {
    return (
        <div>
            {/* <Navbar /> */}
            <main style={styles.main}>
                <section style={styles.section}>
                    <h2 style={styles.sectionHeading}>Our Story</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel purus consequat, aliquet leo sed, vestibulum turpis. Proin sagittis, nulla vel accumsan accumsan, nunc orci interdum turpis.</p>
                    <p>Nullam vel sapien ut lectus mollis hendrerit. Duis faucibus felis id dapibus ultricies. Vivamus elementum libero sit amet neque congue, id euismod eros vestibulum. Mauris suscipit purus id nibh hendrerit, in sollicitudin leo aliquet.</p>
                </section>
                <section style={styles.section}>
                    <h2 style={styles.sectionHeading}>Our Team</h2>
                    <p>Meet our dedicated team of professionals who are committed to excellence and customer satisfaction.</p>
                    <ul style={styles.teamList}>
                        <li>John Doe - CEO</li>
                        <li>Jane Smith - CFO</li>
                        <li>Michael Johnson - CTO</li>
                    </ul>
                </section>
                <section style={styles.section}>
                    <h2 style={styles.sectionHeading}>Mission Statement</h2>
                    <p>Our mission is to provide high-quality products and services that exceed customer expectations.</p>
                </section>
            </main>
            {/* <Footer /> */}
        </div>
    );
};

const styles = {
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
    },
    teamList: {
        listStyleType: 'none',
        padding: '0'
    }
};

export default About;
