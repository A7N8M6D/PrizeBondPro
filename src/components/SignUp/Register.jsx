import React from "react";
import "./Register.css"
import SignUp from "./SignUp";
const Register = () => {
  return (
    <div className="container">
      <div className="LeftContiner">
        <div className="LeftMain">
          <div className="LeftMainText">
            <div className="LeftText">
             <h1>
             <div>

                Welcome back to
             </div>
             <div>

                   Website 
             </div>
             </h1>   
            </div>
            <div className="TextParagraph">
                Already Have an Account
            </div>
            <div className="TextButton">
                <button>
                    
                        Sign In
                    
                </button>
            </div>
          </div>
        </div>
      </div>
      <div className="RightContainer">
        <div className="RightMain">
       
            <SignUp/>
        
        </div>
      </div>
    </div>
  );
};

export default Register;
