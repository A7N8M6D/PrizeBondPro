import React, { useState } from "react";
import { useFormik } from "formik";
import SignUpResponse from "../Response/Response.jsx";
import * as Yup from "yup";
import axios from "axios";
import "./SignUp.css";
import { AiOutlineMail, AiOutlineUser, AiOutlinePhone } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { BsGeoAlt } from "react-icons/bs";
import InputField from "./../InputField/InputField.jsx";
import { Helmet } from 'react-helmet';

const SignUp = () => {
  const [responseMessage, setResponseMessage] = useState(null);
  const formProps = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      username: "",
      password: "",
      userType: "user",
      Location: "",
      number: "",
    },
    validationSchema: Yup.object({
      fullname: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      username: Yup.string().required("Required"),
      password: Yup.string().required("Required"),
      userType: Yup.string().required("Required"),
      Location: Yup.string().required("Required"),
      number: Yup.number().required("Must Be number"),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await axios.post(
          "https://prize-bond-backend.vercel.app/api/v1/users/register",
          values
        );
        if (response.data.statusCode === 200) {
          setResponseMessage({
            statusCode: response.statusCode,
            message: "Successfully registered",
          });
        }
        resetForm();
      } catch (error) {
        console.error("Error:", error.response.data);
        setResponseMessage({
          statusCode: error.response.statusCode,
          message: "Error: Please try again",
        });
      }
    },
  });

  return (
    <div className="containerMain">
      <Helmet>
        <title>Sign Up - Prize Bond Search</title>
        <meta name="description" content="Sign up to manage your prize bonds and access your account." />
        <meta name="keywords" content="sign up, prize bond account, create account, register for prize bond" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Sign Up",
            "description": "Sign up to manage your prize bonds and access your account.",
            "url": "http://www.yourwebsite.com/signup"
          })}
        </script>
      </Helmet>
      <div className="containerTitle">
        <h2 className="text-center">Create Account</h2>
      </div>
      <div className="containerForm">
        <form onSubmit={formProps.handleSubmit} className="form">
          {responseMessage && (
            <SignUpResponse
              statusCode={responseMessage.statusCode}
              message={responseMessage.message}
            />
          )}
          {[
            { Icon: AiOutlineUser, type: "text", name: "fullname", placeholder: "Full Name" },
            { Icon: AiOutlineMail, type: "email", name: "email", placeholder: "Email" },
            { Icon: AiOutlineUser, type: "text", name: "username", placeholder: "Username" },
            { Icon: RiLockPasswordLine, type: "password", name: "password", placeholder: "Password" },
            { Icon: BsGeoAlt, type: "text", name: "Location", placeholder: "Location" },
            { Icon: AiOutlinePhone, type: "text", name: "number", placeholder: "Phone Number" },
          ].map((input, index) => (
            <InputField
              key={index}
              Icon={input.Icon}
              type={input.type}
              name={input.name}
              value={formProps.values[input.name]}
              onChange={formProps.handleChange}
              onBlur={formProps.handleBlur}
              placeholder={input.placeholder}
              error={formProps.errors[input.name]}
              touched={formProps.touched[input.name]}
            />
          ))}
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
