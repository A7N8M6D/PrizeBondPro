import React, { useState } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet';

const AddBondForm = () => {
    const [formData, setFormData] = useState({
        PrizeBondTyp: '',
        PrizeBondNumbe: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://prize-bond-backend.vercel.app/api/v1/bonds', formData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log(response.data);
            // Handle successful response
            alert('Bond saved successfully!');
        } catch (error) {
            console.error(error);
            // Handle error
            alert('Failed to save bond.');
        }
    };

    return (
        <div>
            <Helmet>
                <title>Add Bond - Prize Bond Search</title>
                <meta name="description" content="Add your prize bond details quickly and easily." />
                <meta name="keywords" content="add prize bond, prize bond details, prize bond entry, prize bond form" />
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebPage",
                        "name": "Add Prize Bond",
                        "description": "Add your prize bond details quickly and easily.",
                        "url": "http://www.yourwebsite.com/add-bond"
                    })}
                </script>
            </Helmet>
            <h2>Add New Bond</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Prize Bond Type</label>
                    <input
                        type="text"
                        name="PrizeBondTyp"
                        value={formData.PrizeBondTyp}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Prize Bond Number</label>
                    <input
                        type="text"
                        name="PrizeBondNumbe"
                        value={formData.PrizeBondNumbe}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default AddBondForm;
