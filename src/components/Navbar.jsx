import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ user }) => {
  return (
    <div className="navbar">
      <Link className="link" to="/">
        Login Social
      </Link>
      {user ? (
        <>
          <ul className="list">
            <li className="listItem">
              <img alt="user" className="avatar" />
            </li>
            <li className="listItem">Test</li>
            <li className="listItem">Logout</li>
          </ul>
        </>
      ) : (
        <>
          <Link className="link" to="/login">
            Login
          </Link>
        </>
      )}
    </div>
  );
};

export default Navbar;
