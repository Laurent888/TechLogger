import React, { useState } from "react";
import "./SignUpPage.scss";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  const [signUp, setSignUp] = useState({
    email: "",
    password: "",
    name: ""
  });

  const handleChange = e => {
    setSignUp({
      ...signUp,
      [e.target.name]: [e.target.value]
    });
  };

  return (
    <div className="signup">
      <div className="container">
        <div className="signup-contained">
          <h1 className="mb-2">TECH LOGGER</h1>
          <h2 className="subtitle mt-2 mb-2">
            Log in to your Tech Logger account
          </h2>
          <form className="signup-form mt-2">
            <div className="group-form mb-1">
              <label htmlFor="name" className="mb-1">
                Name
              </label>
              <input
                type="name"
                name="name"
                id="name"
                value={signUp.name}
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
