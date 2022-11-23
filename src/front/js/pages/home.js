import React, { useEffect, useContext, useState } from "react";
import { Context } from "../store/appContext";
import { PokemonCard } from "../component/card";
import InfiniteScroll from "react-infinite-scroll-component";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);
  const [ render, rerender] = useState(true)

  useEffect(() => {
    actions.getPokemon();
  }, []);

  const load_pokemon = () => {
    actions.getPokemon();
    rerender(!render);
  }

    //   return(
    // 	<>
    // 	<h1 className="pokedex"><strong>Pokedex</strong></h1>
    //   <div className="card">
    //   {store.pokemon?.map((pokemon, index) => {
    //   const paddedId = ("00" + (index + 1)).slice(-3);
    //   const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedId}.png`;
    // 	  return (
    // 		<PokemonCard key={index}
    // 		  name={pokemon.name}
    // 		  number={pokemon.index}
    // 		  image={image}
    // 		  index = {index} />
    // 	  );
    // 	})}
    //   </div>
    //   </>
    // )

  return (
    <>
      <h1 onClick={actions.getPokemon} className="page-title">
        <strong>Pokedex</strong>
      </h1>
      <InfiniteScroll
        dataLength={store.pokemon.length} 
        next={load_pokemon}
        hasMore={store.pokemon.length < 905}
        loader={<h4>Loading...</h4>}
        >
        <div className="card">
        {store.pokemon.map((pokemon, index) => {
          
          return (
            <PokemonCard
              key={index}
              image={pokemon.image}
              name={pokemon.name}
              type={pokemon.type}
              index={index}
            />
          );
        })}
      </div>
      </InfiniteScroll>
    </>
  );
};
