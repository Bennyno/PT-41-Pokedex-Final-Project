import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const SignUp = (props) => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="container form">
      <div className="text-center mt-5">
        <h1 className="SIGNUP">Sign Up</h1>
        <div className="text-center">
          Already have an account?{" "}
          <Link to="/login">
            <span className="signUpLink">Log In</span>
          </Link>
        </div>
        <div>
          <input
            className="email"
            type="text"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            className="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <div>
          <button
            className="btn btn-primary signupbutton"
            onClick={() => actions.signup(email, password)}
          >
            Sign Up
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};
