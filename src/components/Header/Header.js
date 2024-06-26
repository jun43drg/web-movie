import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "black",
        color: "white",
        padding: "24px",
      }}
    >
      <h5>Tiki</h5>
      <ul
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "16px",
          listStyle: "none",
        }}
      >
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
        <li>
          <Link to="/about-us">About-us</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
