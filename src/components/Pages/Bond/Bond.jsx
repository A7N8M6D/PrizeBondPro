// src/pages/Bonds.js
import React from 'react';
import { FaMoneyCheckAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Bonds = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h2>Bonds Page</h2>
            <p>Welcome to the Bonds page!</p>
            <button onClick={() => navigate('/add-bond')}>
                <FaMoneyCheckAlt /> Add New Bond
            </button>
        </div>
    );
};

export default Bonds;

