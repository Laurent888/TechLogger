import React, { useState } from "react";
import "./SignUpPage.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import { sign } from "jsonwebtoken";

const SignUpPage = () => {
  const [signUp, setSignUp] = useState({
    email: "",
    password: "",
    userName: ""
  });
  const [uiMessage, setUiMessage] = useState("");

  const handleChange = e => {
    setSignUp({
      ...signUp,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (signUp.email === "" || signUp.password === "" || signUp.name === "") {
      return;
    }
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    try {
      await axios.post("api/user", signUp, config);
      setSignUp({
        email: "",
        password: "",
        userName: ""
      });
      setUiMessage(
        "User created successfully, you can now login with your credentials."
      );
    } catch (err) {
      console.log(err.response.data.data);
    }
  };

  return (
    <div className="signup">
      <div className="container">
        <div className="signup-contained">
          <h1 className="mb-2">TECH LOGGER</h1>
          <h2 className="subtitle mt-2 mb-2">
            Log in to your Tech Logger account
          </h2>

          {/* INFORMATION MESSAGE */}
          {uiMessage && (
            <div className="message mt-2 mb-2">
              {uiMessage}
              <Link to="/" onClick={() => setUiMessage("")}>
                Sign In
              </Link>
            </div>
          )}

          {/* SIGN UP FORM */}
          <form className="signup-form mt-2" onSubmit={handleSubmit}>
            <div className="group-form mb-1">
              <label htmlFor="name" className="mb-1">
                Name
              </label>
              <input
                type="name"
                name="userName"
                id="userName"
                value={signUp.userName}
                onChange={handleChange}
              />
            </div>
            <div className="group-form mb-1">
              <label htmlFor="email" className="mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={signUp.email}
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
                value={signUp.password}
                onChange={handleChange}
              />
            </div>
            <button className="signup mt-2" type="submit">
              Sign up
            </button>
          </form>
          <p className="mt-2 signup-link">
            Already have a Tech Logger account ? <Link to="/">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
