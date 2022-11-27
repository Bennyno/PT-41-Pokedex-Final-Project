import React, { useState, useEffect, useContext } from "react";
import { ProgressBar } from "react-bootstrap";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

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

export const Pokemon = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  // useEffect(()=>{
  //   console.log(process.env.BACKEND_URL)
  // },[]) 

  const data = store.pokemon[params.id];

  const trimmedData = data.type.split(",").map(types => {
    return types.trim()
  })

  const trimmedNames = data.stat_names.split(",").map(names => {
    return names.trim()
  })

  const trimmedStats = data.stats.split(",").map(stats => {
    return stats.trim(trimmedStats)
  })
  console.log(trimmedStats);
  for (let i = 0; i < trimmedNames.length; i++){  
    console.log(trimmedNames[i]);}


  return (
    <div className="jumbotron">
      <div>
        <img className="soloimg" src={data.image} />
        <h1 className="display-4">{data.name}</h1>
        <div className="grid">
        <p className="single typingPoke">
        {trimmedData.map((type) => (
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
        
        <p className="single"><strong>Number:</strong> {data.id}</p>
        <p className="single"><strong>Abilities:</strong> {data.abilities}</p>
        <p className="single"><strong>Height:</strong> {data.height}</p>
		    <p className="single-last"><strong>Weight:</strong> {data.weight}</p>
        </div>
       
      <div className= "statsGraph">
      <h4>Base Stats</h4>
            <strong>{trimmedNames[0].toUpperCase()}</strong>
            <ProgressBar now={trimmedStats[0]} max={255} label={trimmedStats[0]} />
            <strong>{trimmedNames[1].toUpperCase().toUpperCase()}</strong>
            <ProgressBar now={trimmedStats[1]} max={255} label={trimmedStats[1]} />
            <strong>{trimmedNames[2].toUpperCase()}</strong>
            <ProgressBar now={trimmedStats[2]} max={255} label={trimmedStats[2]} />
            <strong>{trimmedNames[3].toUpperCase()}</strong>
            <ProgressBar now={trimmedStats[3]} max={255} label={trimmedStats[3]} />
            <strong>{trimmedNames[4].toUpperCase()}</strong>
            <ProgressBar now={trimmedStats[4]} max={255} label={trimmedStats[4]} />
            <strong>{trimmedNames[5].toUpperCase()}</strong>
            <ProgressBar now={trimmedStats[5]} max={255} label={trimmedStats[5]} />
      </div>
            <p className="detail">
          This is {data.name}. <br></br>
		  It is a {data.type} type pokemon and it's pokedex number is {data.id}. <br></br>
		  It has the abilities {data.abilities} and it's {data.stat_names} stats are {data.stats} respectively. 
        </p>
      </div>
      <hr className="my-4" />
      <Link to="/">
        <span className="btn btn-danger btn-lg" role="button">
          Back home
        </span>
      </Link>
    </div>
  );
};

Pokemon.propTypes = {
  match: PropTypes.object,
};

