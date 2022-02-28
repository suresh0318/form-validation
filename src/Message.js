import React from "react";
import "./App.css"
import { Link } from "react-router-dom";
const Message = () => {
  return (
    <div>
      <div id="main-wrapper">
        <h1 className="main-heading">Registered Successfully!!</h1>
      </div>
      <Link to="/login">
      <button className="login-btn" >Login now</button>
      </Link>
    </div>
  );
};

export default Message;
