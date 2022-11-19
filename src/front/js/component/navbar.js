import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import { DropDownMenu } from "./dropdown";

export const Navbar = () => {
  const { store, actions } = useContext(Context);

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">
          <img
            className="pokemon-logo"
            src="https://bignintendonews.files.wordpress.com/2016/09/pokemon-logo_-e1444920307199.jpg"
          />
        </Link>
        <Link to="/game">
          <button className="btn btn-primary">
            Click here to play the game!
          </button>
        </Link>
      </div>
      <div className="ml-auto">

          {!store.token ? (
            <Link to="/login">
              <button className="btn btn-primary" style={{ margin: "10px" }}>
                Login
              </button>
            </Link>
          ) : (
            <button
              onClick={() => actions.logout()}
              className="btn btn-primary"
              style={{ margin: "10px" }}
            >
              Logout
            </button>
          )}
          <Link to="/signup">
            <button className="btn btn-primary">Sign Up</button>
          </Link>
          <Link to="/game">
            <button className="btn btn-primary">Play Game!</button>
          </Link>
          <div className="dropdown">
          <DropDownMenu />
        </div>
        </div>
    </nav>
  );
};
