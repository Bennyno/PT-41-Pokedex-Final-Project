import React, { useEffect, useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Card } from "../component/card"
import "../../styles/home.css";


export const Home = () => {
	const { store, actions } = useContext(Context);
	
	useEffect(() => {
		actions.getPokemon().then(()=> console.log(store.pokemon));
	  }, []);


	//   return(
	// 	<>
	// 	<h1 className="pokedex"><strong>Pokedex</strong></h1>
	//   <div className="card">
	//   {store.pokemon.map((pokemon, index) => {
		
	// 	  return (
	// 		<Card key={index}
	// 		  name={pokemon.name}
	// 		  type={pokemon.type}
	// 		  image={pokemon.image}
	// 		  index = {index} />
	// 	  );
	// 	})}
	//   </div>
	//   </>
	// )


	  return(
		<>
		<h1 className="pokedex"><strong>Pokedex</strong></h1>
	  <div className="card">
	  {store.pokemon.map((pokemon, index) => {
		 const paddedId = ('00' + (index + 1)).slice(-3);
		 const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedId}.png`;
		
		  return (
			<Card key={index}
			  name={pokemon.name}
			  image={image}
			  url={pokemon.url}
			  index = {index} />
		  );
		})}
	  </div>
	  </>
	)
}

	
