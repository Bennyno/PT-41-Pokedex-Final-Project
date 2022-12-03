import React from "react";
import { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";

const TYPE_COLORS = {
  bug: "B1C12E",
  dark: "4F3A2D",
  dragon: "755EDF",
  electric: "FCBC17",
  fairy: "F4B1F4",
  fighting: "800000",
  fire: "E73B0C",
  flying: "A3B3F7",
  ghost: "6060B2",
  grass: "74C236",
  ground: "D3B357",
  ice: "A3E7FD",
  normal: "C8C4BC",
  poison: "934594",
  psychic: "ED4882",
  rock: "B9A156",
  steel: "B5B5C3",
  water: "3295F6",
};

export const PokemonCard = (props) => {
  const { store, actions } = useContext(Context);
  const typing = props.type.split(",");

  const data = typing.map(types => {
    return types.trim()
  })
  // console.log(data);

  return (
    <div className="card pokemon-card">
      <div className="card-body">
        <img src={props.image} className="card-img-top" alt=""></img>
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">
          <strong>Number:</strong> {props.index + 1}
        </p>
        <p className="card-text typing">
        {data.map((type) => (
          <span
            key={type}
            className="badge badge-pill mr-1"
            style={{
              backgroundColor: `#${TYPE_COLORS[type]}`,
              color: "white",
            }}
          >
            {type
              .toLowerCase()
              .split(" ")
              .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
              .join(" ")}
          </span>
        ))}
        </p>
        <Link to={"/pokemon/" + props.index} className="btn btn-danger">
          Learn More
        </Link>
        <button
          className="pokeball-button"
          onClick={() => actions.setFavorites({name:props.name, id:props.index})}
        >
          <img
            className="pokeball"
            src="https://assets.webiconspng.com/uploads/2017/09/Pokeball-PNG-Image-50419-150x150.png"
          ></img>
        </button>
      </div>
    </div>
  );
};
