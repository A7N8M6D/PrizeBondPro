// src/SignUp.js

import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
// import { useSpring,  } from 'react-spring';
import axios from 'axios';
import "./SignUp.css"
const SignUp = () => {
  const formProps = useFormik({
    initialValues: {
      fullname: '',
      email: '',
      username: '',
      password: '',
      userType: 'user', // Set default value to "user"
      Location: '',
      number: ''
    },
    validationSchema: Yup.object({
      fullname: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      username: Yup.string().required('Required'),
      password: Yup.string().required('Required'),
      userType: Yup.string().required('Required'),
      Location: Yup.string().required('Required'),
      number: Yup.string().required('Required')
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await axios.post('https://prize-bond-backend.vercel.app/api/v1/users/register', values);
        console.log(response.data); // Log the response from the server
        resetForm();
      } catch (error) {
        console.error('Error:', error.response.data); // Log error response
      }
    }
  });

  // const animatedProps = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <div  className="container">
    <div className='containerMain'>
    <div className='containerTitle'>
      <h2 className="text-center">Sign Up</h2>
    </div>
    <div className='containerForm'>
      <form onSubmit={formProps.handleSubmit} className='form'>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            name="fullname"
            value={formProps.values.fullname}
            onChange={formProps.handleChange}
            onBlur={formProps.handleBlur}
            placeholder="Full Name"
          />
          {formProps.touched.fullname && formProps.errors.fullname ? (
            <div className="text-danger">{formProps.errors.fullname}</div>
          ) : null}
        </div>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            name="email"
            value={formProps.values.email}
            onChange={formProps.handleChange}
            onBlur={formProps.handleBlur}
            placeholder="Email"
          />
          {formProps.touched.email && formProps.errors.email ? (
            <div className="text-danger">{formProps.errors.email}</div>
          ) : null}
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            name="username"
            value={formProps.values.username}
            onChange={formProps.handleChange}
            onBlur={formProps.handleBlur}
            placeholder="Username"
          />
          {formProps.touched.username && formProps.errors.username ? (
            <div className="text-danger">{formProps.errors.username}</div>
          ) : null}
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            name="password"
            value={formProps.values.password}
            onChange={formProps.handleChange}
            onBlur={formProps.handleBlur}
            placeholder="Password"
          />
          {formProps.touched.password && formProps.errors.password ? (
            <div className="text-danger">{formProps.errors.password}</div>
          ) : null}
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            name="Location"
            value={formProps.values.Location}
            onChange={formProps.handleChange}
            onBlur={formProps.handleBlur}
            placeholder="Location"
          />
          {formProps.touched.Location && formProps.errors.Location ? (
            <div className="text-danger">{formProps.errors.Location}</div>
          ) : null}
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            name="number"
            value={formProps.values.number}
            onChange={formProps.handleChange}
            onBlur={formProps.handleBlur}
            placeholder="Phone Number"
          />
          {formProps.touched.number && formProps.errors.number ? (
            <div className="text-danger">{formProps.errors.number}</div>
          ) : null}
        </div>
        <button type="submit" className="btn btn-primary">Sign Up</button>
      </form>
      </div>
      </div>
    </div>
  );
};

export default SignUp;
