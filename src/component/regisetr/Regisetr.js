import React, { useState } from 'react';
import Navbar from '../common/Navbar/Navbar';
import Footer from '../common/footer/Footer';

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        name: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here (e.g., send data to server)
        console.log(formData);
        // Reset form after submission (if needed)
        setFormData({
            email: '',
            name: ''
        });
    };

    return (
        <>
            {/* <Navbar /> */}
            <form onSubmit={handleSubmit} style={styles.form}>
                <div style={styles.formGroup}>
                    <label htmlFor="email" style={styles.label}>Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        style={styles.input}
                        required
                    />
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="name" style={styles.label}>Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        style={styles.input}
                        required
                    />
                </div>
                <button type="submit" style={styles.button}>Register</button>
            </form>
            {/* <Footer /> */}
        </>
    );
};

const styles = {
    form: {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '300px',
        margin: '0 auto'
    },
    formGroup: {
        marginBottom: '15px'
    },
    label: {
        marginBottom: '5px',
        display: 'block',
        fontWeight: 'bold'
    },
    input: {
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '3px',
        fontSize: '16px',
        width: '100%',
        boxSizing: 'border-box'
    },
    button: {
        padding: '10px 20px',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '3px',
        fontSize: '16px',
        cursor: 'pointer',
        marginTop: "1%"
    }
};

export default RegistrationForm;
