import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Pokemon = (props) => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const [pokemon, setPokemon] = useState();

	// {store.pokemon.map((pokemon, index) => {
	// const paddedId = ('00' + (index + 1)).slice(-3);
	// const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${params.id}.png`
	// })}
	useEffect(()=> {
		 fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`)
				.then(response => response.json())
				.then(json => setPokemon(json))
				.catch(error => console.log('error', error));
	}, [])

	return (
		<div className="jumbotron">
			<div>
			<img className = "soloimg" src={pokemon && pokemon.image} />
			<h1 className="display-4">
				 {pokemon && pokemon.name}
			</h1>
			<p className ="single"><strong>Url:</strong>{pokemon && pokemon.url}</p>
			<p className="detail">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
				Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
				Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
				Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.</p>
			</div>
			<hr className="my-4" />
			<Link to="/">
				<span className="btn btn-primary btn-lg" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};

Pokemon.propTypes = {
	match: PropTypes.object
};