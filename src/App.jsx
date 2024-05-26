// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.jsx';
import Home from './components/Pages/Home/Home.jsx';
import Bonds from './components/Pages/Bond/Bond.jsx';
import Broker from './components/Pages/Broker/Broker.jsx'
import SignUp from './components/SignUp/SignUp.js';
import AddBondForm from './components/AddBond/AddBondForm.jsx';
const App = () => {
    return (
        
       <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/bonds" element={<Bonds />} />
                <Route path="/broker" element={<Broker />} />
                <Route path="/signup" element={<SignUp />} /> {/* Add this line */}
                <Route path="/add-bond" element={<AddBondForm />} />
            </Routes>
        </Router>
        
    );
};

export default App;
