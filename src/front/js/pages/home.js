import React, { useEffect, useContext, useState } from "react";
import { Context } from "../store/appContext";
import { PokemonCard } from "../component/card";
import InfiniteScroll from "react-infinite-scroll-component";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);
  const [render, rerender] = useState(true);

  useEffect(() => {
    actions.getPokemon();
  }, []);

  const load_pokemon = () => {
    actions.getPokemon();
    rerender(!render);
  };

  return (
    <>
      <h1 onClick={actions.getPokemon} className="page-title">
        <strong>Pokedex</strong>
      </h1>
      {store.token && store.token != "" && store.token != undefined ? (
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
                  flavor_text={pokemon.flavor_text}
                  index={index}
                />
              );
            })}
          </div>
        </InfiniteScroll>
      ) : (
        <InfiniteScroll
          dataLength={store.pokemon.length}
          next={load_pokemon}
          hasMore={store.pokemon.length < 100}
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
                  flavor_text={pokemon.flavor_text}
                  index={index}
                />
              );
            })}
          </div>
        </InfiniteScroll>
      )}
    </>
  );
};
