import React from 'react'
import { Link } from "react-router-dom";
// import SignUp from "../SignUp/SignUp.js";
import SignIn from './SignInResponse.jsx';
import "./SignIn.css"
const SigIn = () => {
  return (
    <div className="container">
      <div className="RightContainer">
        <div className="RightMain">
          <SignIn/>
        </div>
      </div>
      <div className="LeftContiner">
        <div className="LeftMain">
          <div className="LeftMainText">
            <div className="LeftText">
              <h1>
                <div>Welcome to</div>
                <div>Website</div>
              </h1>
            </div>
            <div className="TextParagraph">New Here</div>
            <div className="TextButton">
              <button>
                <Link to="/Register">Sign Up</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SigIn