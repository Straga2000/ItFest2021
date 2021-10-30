import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav
      style={{
        backgroundColor: "#cccccc",
        marginBottom: "2rem",
        display: "flex",
        justifyContent: "space-evenly",
      }}
    >
      <Link to="/welcome">Welcome page</Link>
      <Link to="/get-started">Get started page</Link>
    </nav>
  );
};

export default Nav;
