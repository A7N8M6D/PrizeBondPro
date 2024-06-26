import React from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import SignUp from "../SignUp/SignUp.js";
const Register = () => {
  return (
    <div className="container">
      <div className="LeftContiner">
        <div className="LeftMain">
          <div className="LeftMainText">
            <div className="LeftText">
              <h1>
                <div>Welcome back to</div>
                <div>Website</div>
              </h1>
            </div>
            <div className="TextParagraph">Already Have an Account</div>
            <div className="TextButton">
              <button>
                <Link to="/SignIn">Sign In</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="RightContainer">
        <div className="RightMain">
          <SignUp />
        </div>
      </div>
    </div>
  );
};

export default Register;
