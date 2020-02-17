import React, { useState } from "react";
import "./SignInPage.scss";
import { Link } from "react-router-dom";
import axios from "axios";
// IMPORT REDUX
import { connect } from "react-redux";
import { setCurrentUser } from "../../../redux/user/userActions";

const SignInPage = ({ setCurrentUser }) => {
  const [login, setLogin] = useState({
    email: "",
    password: ""
  });
  const [error, setError] = useState("");

  const handleChange = e => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (login.email === "" || login.password === "") {
      return setError("All fields are required");
    }

    const userLogin = {
      email: login.email,
      password: login.password
    };

    setCurrentUser(userLogin);
  };

  return (
    <div className="signin">
      <div className="container">
        <div className="signin-contained">
          <h1 className="mb-2">TECH LOGGER</h1>
          <h2 className="subtitle mt-2 mb-2">
            Log in to your Tech Logger account
          </h2>
          <form className="signin-form mt-2" onSubmit={handleSubmit}>
            <div className="group-form mb-1">
              <label htmlFor="email" className="mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={login.email}
                onChange={handleChange}
              />
            </div>
            <div className="group-form mb-1">
              <label htmlFor="password" className="mb-1">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={login.password}
                onChange={handleChange}
              />
            </div>
            <button className="login mt-2" type="submit">
              Log in
            </button>
          </form>
          <p className="mt-2 signup-link">
            Don't have a Tech Logger account ? <Link to="/signup">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(SignInPage);
