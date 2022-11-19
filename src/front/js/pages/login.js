import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Login = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const navigate = useNavigate();

  console.log("This is your token", store.token);

  const handleClick = () => {
    actions.login(email, password);
  };

  // if(store.token && store.token != "" && store.token != undefined) navigate("/private");

  return (
    <div className="container form">
    <form className="box">
    <div className="text-center mt-5">
      <h1 className="header">Login</h1>
      <div className="text-center">
        No registered yet?{" "}
        <Link to="/signup">
          <span className="signUpLink">Sign Up</span>
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
        <button className= "btn btn-primary newsign"  onClick={handleClick}>Login</button>
        <p className="text-center mt-2">
          Forgot <a href="#">password?</a>
        </p>
      </div>
    </div>
    </form>
    </div>
  );
};
