// src/SignUpResponse.js

import React from 'react';

const SignUpResponse = ({ statusCode, message }) => {
  return (
    <div>
      {statusCode === 200 ? (
        <div className="alert alert-success" role="alert">
          {message}
        </div>
      ) : (
        <div className="alert alert-danger" role="alert">
          {message}
        </div>
      )}
    </div>
  );
};

export default SignUpResponse;
