// src/LoginForm.js
import React, { useState } from 'react';

const LoginForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
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
        // Handle form submission here (e.g., login logic)
        console.log(formData);
        // Reset form after submission (if needed)
        setFormData({
            email: '',
            password: ''
        });
    };

    return (
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
                <label htmlFor="password" style={styles.label}>Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    style={styles.input}
                    required
                />
            </div>
            <button type="submit" style={styles.button}>Login</button>
        </form>
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
        backgroundColor: '#28a745',
        color: 'white',
        border: 'none',
        borderRadius: '3px',
        fontSize: '16px',
        cursor: 'pointer'
    }
};

export default LoginForm;
