import React from "react";
import Input from "../../components/Input";

const LoginForm = () => {
  return (
    <form>
      <h3>Login</h3>

      <Input placeholder={"Email adress"} />
      <Input placeholder={"Password"} type={"password"} />

      <button type="submit">Sign me in!</button>
    </form>
  );
};

export default LoginForm;
