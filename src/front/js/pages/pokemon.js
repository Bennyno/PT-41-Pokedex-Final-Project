import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Pokemon = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  // const [pokemon, setPokemon] = useState();

  // {store.pokemon.map((pokemon, index) => {
  // const paddedId = ('00' + (index + 1)).slice(-3);
  // const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${params.id}.png`
  // })}
  // useEffect(()=> {
  // 	 fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`)
  // 			.then(response => response.json())
  // 			.then(json => setPokemon(json))
  // 			.catch(error => console.log('error', error));
  // }, [])

  const data = store.pokemon[params.id];
  return (
    <div className="jumbotron">
      <div>
        <img className="soloimg" src={data.image} />
        <h1 className="display-4">{data.name}</h1>
        <p className="single">
          <strong>Type:</strong> {data.type}</p>
        <p className="single"><strong>Number:</strong> {data.id}</p>
        <p className="single"><strong>Abilities:</strong> {data.abilities}</p>
        <p className="single"><strong>Stat Names:</strong> {data.stat_names}</p>
		<p className="single"><strong>Stats:</strong> {data.stats}</p>
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

Pokemon.propTypes = {
	match: PropTypes.object
};