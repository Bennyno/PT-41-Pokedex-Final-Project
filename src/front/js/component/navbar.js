import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { DropDownMenu } from "./dropdown";

export const Navbar = () => {
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
      <div className="dropdown">
        <DropDownMenu />
      </div>
    </nav>
  );
};
