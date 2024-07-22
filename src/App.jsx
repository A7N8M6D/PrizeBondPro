// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.jsx';
import Home from './components/Pages/Home/Home.jsx';
import Bonds from './components/Pages/Bond/Bond.jsx';
import Broker from './components/Pages/Broker/Broker.jsx';
import SignUp from './components/SignUp/SignUp.js';
import AddBondForm from './components/AddBond/AddBondForm.jsx';
import Register from './components/SignUp/Register.jsx';
import SigIn from './components/SignIn/SigIn.jsx';
import { Helmet } from 'react-helmet';

const App = () => {
    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={
                        <>
                            <Helmet>
                                <title>Home - Prize Bond Search</title>
                                <meta name="description" content="Search your prize bond numbers quickly and easily." />
                                <meta name="keywords" content="prize bond, bond search, bond number" />
                            </Helmet>
                            <Home />
                        </>
                    } />
                    <Route path="/bonds" element={
                        <>
                            <Helmet>
                                <title>Bonds - Prize Bond Search</title>
                                <meta name="description" content="Find details on various prize bonds." />
                                <meta name="keywords" content="prize bonds, bond details" />
                            </Helmet>
                            <Bonds />
                        </>
                    } />
                    <Route path="/broker" element={
                        <>
                            <Helmet>
                                <title>Broker - Prize Bond Search</title>
                                <meta name="description" content="Get in touch with prize bond brokers." />
                                <meta name="keywords" content="prize bond brokers, bond broker contact" />
                            </Helmet>
                            <Broker />
                        </>
                    } />
                    <Route path="/signup" element={
                        <>
                            <Helmet>
                                <title>Sign Up - Prize Bond Search</title>
                                <meta name="description" content="Sign up to manage your prize bonds." />
                                <meta name="keywords" content="sign up, prize bond account" />
                            </Helmet>
                            <SignUp />
                        </>
                    } />
                    <Route path="/add-bond" element={
                        <>
                            <Helmet>
                                <title>Add Bond - Prize Bond Search</title>
                                <meta name="description" content="Add your prize bond details." />
                                <meta name="keywords" content="add bond, prize bond details" />
                            </Helmet>
                            <AddBondForm />
                        </>
                    } />
                    <Route path="/Register" element={
                        <>
                            <Helmet>
                                <title>Register - Prize Bond Search</title>
                                <meta name="description" content="Register to start searching prize bonds." />
                                <meta name="keywords" content="register, prize bond registration" />
                            </Helmet>
                            <Register />
                        </>
                    } />
                    <Route path="/SignIn" element={
                        <>
                            <Helmet>
                                <title>Sign In - Prize Bond Search</title>
                                <meta name="description" content="Sign in to access your prize bond account." />
                                <meta name="keywords" content="sign in, prize bond account" />
                            </Helmet>
                            <SigIn />
                        </>
                    } />
                </Routes>
            </Router>
        </>
    );
};

export default App;
