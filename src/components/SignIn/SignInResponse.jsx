import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import InputField from "./../InputField/InputField.jsx"; // Assume this is a reusable input field component
import SignInResponse from "../Response/Response.jsx"; // Assuming a similar response component for Sign In
import "./SignInResponse.css"; // Your CSS file for styling

const SignIn = () => {
  const [responseMessage, setResponseMessage] = useState(null);

  const formProps = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string().required("Required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await axios.post(
          "https://prize-bond-backend.vercel.app/api/v1/users/login",
          values
        );
        if (response.data.statusCode === 200) {
          setResponseMessage({
            statusCode: response.data.statusCode,
            message: "Successfully logged in",
          });
        }
        resetForm();
      } catch (error) {
        setResponseMessage({
          statusCode: error.response?.status || 500,
          message: "Error: Please try again",
        });
      }
    },
  });

  return (
    <div className="containerMain">
      <div className="containerTitle">
        <h2 className="text-center">Sign In</h2>
      </div>
      <div className="containerForm">
        <form onSubmit={formProps.handleSubmit} className="form">
          {responseMessage && (
            <SignInResponse
              statusCode={responseMessage.statusCode}
              message={responseMessage.message}
            />
          )}
          {[
            { Icon: AiOutlineMail, type: "email", name: "email", placeholder: "Email" },
            { Icon: AiOutlineLock, type: "password", name: "password", placeholder: "Password" },
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
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
