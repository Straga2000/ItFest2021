import React, { useState } from "react";
import LoginForm from "../../modules/LoginForm";
import RegisterForm from "../../modules/RegisterForm";

const GetStarted = () => {
  const [showRegister, setShowRegister] = useState(false);

  const handlePageViewChange = () => {
    setShowRegister(!showRegister);
  };

  return (
    <>
      <button onClick={handlePageViewChange}>
        {!showRegister
          ? "Don't have an account"
          : "Already have an account? Log in."}
      </button>{" "}
      {showRegister && <RegisterForm />}
      {!showRegister && <LoginForm />}
    </>
  );
};

export default GetStarted;
