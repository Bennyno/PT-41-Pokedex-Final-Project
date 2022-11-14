import React from "react";
import { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";

export const Card = (props) => {
    const { store, actions } = useContext(Context);
  
    return (
      <>
        <div className="card-body">
        <img
          src={props.image}
          className="card-img-top"
          alt=""
        ></img>
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text"><strong>Number:</strong> {(props.index + 1)}</p>
          <p className="card-text"><strong>Type:</strong> {props.type}</p>
          <p className="card-text"><strong>Url:</strong> {props.url}</p>
          <Link to={"/pokemon/" + (props.index + 1)} className="btn btn-danger">
            Learn More
          </Link>
          <button className="pokeball-button" onClick={()=>actions.setFavorites(props.name)}>
            <img className="pokeball" src="https://assets.webiconspng.com/uploads/2017/09/Pokeball-PNG-Image-50419-150x150.png"></img>
          </button>
        </div>
      </>
    );
  };