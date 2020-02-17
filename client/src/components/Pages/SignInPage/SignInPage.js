import React, { useState } from "react";
import "./SignInPage.scss";
import { Link } from "react-router-dom";
import FormInput from "../../FormInput/FormInput";
// IMPORT REDUX
import { connect } from "react-redux";
import { setCurrentUser } from "../../../redux/user/userActions";

const SignInPage = ({ setCurrentUser }) => {
  const [login, setLogin] = useState({
    email: "",
    password: ""
  });
  const [uiMessage, setUiMessage] = useState("");

  const handleChange = e => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (login.email === "" || login.password === "") {
      return setUiMessage(
        "All fields are required",
        setTimeout(() => setUiMessage(""), 4000)
      );
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
          {/* INFORMATION MESSAGE */}
          {uiMessage && <div className="message mt-2 mb-2">{uiMessage}</div>}
          <form className="signin-form mt-2" onSubmit={handleSubmit}>
            <FormInput
              type="email"
              name="email"
              value={login.email}
              handleChange={handleChange}
              label="Email"
            />
            <FormInput
              type="password"
              name="password"
              value={login.password}
              handleChange={handleChange}
              label="Password"
            />
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
