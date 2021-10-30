import React from "react";
import Input from "../../components/Input";

const RegisterForm = () => {
  return (
    <form>
      <h3>Register</h3>

      <Input placeholder={"Full name"} />
      <Input placeholder={"Email adress"} />
      <Input placeholder={"Password"} type={"password"}></Input>

      <button type="submit">Sign me in!</button>
    </form>
  );
};

export default RegisterForm;
