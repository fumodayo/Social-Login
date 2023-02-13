import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Login Social</span>
      <ul className="list">
        <li className="listItem">
          <img alt="user" className="avatar" />
        </li>
        <li className="listItem">Test</li>
        <li className="listItem">
          Logout
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
