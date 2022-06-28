import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

const Logout = () => {
  const name = localStorage.getItem("currentUser");
  const deleteUser = () => {
    localStorage.removeItem("currentUser");
  };
  return (
    <div >
      {!name ? (
        <p className="newLink">
          please <Link to="/login">login</Link>
        </p>
      ) : (
        <div>
          <div id="main-wrapper">
            <h1 className="main-heading">Welcome {name}!!</h1>
          </div>
          <Link to="/login">
            <button className="login-btn" onClick={deleteUser}>
              Logout now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Logout;
