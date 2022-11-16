import React, { useState } from "react";
import "../../styles/home.css";

export const Game = () => {
  //hooks
  const [started, updateStarted] = useState(false);
  const [pokemon, updatePokemon] = useState([]);
  const [correct, updateCorrect] = useState(5);
  const [load, updateLoad] = useState(false);
  const [answer, answerUpdate] = useState(null);

  async function getPokemon() {
    //reset all of the states back to default, and starts loading state
    updateStarted(true);
    answerUpdate(null);
    updateCorrect(null);
    updateLoad(true);
    updatePokemon([]);

    //initial variables
    let num = 1;
    let arrayOfPoke = [];
    let response, data;

    //pick the pokemon to be the correct answer
    updateCorrect(Math.floor(Math.random() * 4));

    //get 4 random pokemon
    for (let i = 0; i < 4; i++) {
      num = Math.floor(Math.random() * 898) + 1;

      response = await fetch(`https://pokeapi.co/api/v2/pokemon/${num}`);
      if (!response.ok) {
        alert("failed to retrieve pokemon");
        return;
      }

      data = await response.json();
      arrayOfPoke.push(data);
    }

    //end loading state, update array of pokemon
    updateLoad(false);
    updatePokemon(arrayOfPoke);
  }

  return (
    <>
      {/* Importing a custom Pokemon font. */}
      <style>
        @import url('https://fonts.cdnfonts.com/css/pokemon-solid');
      </style>
      <div className="container pokemonGame">
        {/*render the header*/}
        <header className="App-header Poke">
          <h1>Who's That Pokemon!</h1>
        </header>
        {answer === null && pokemon.length === 4 && (
          <div className="App-body">
            <div className="Body-contents">
              <div className="Img">
                <img
                  className="Hidden-img"
                  src={pokemon[correct].sprites.front_default}
                  alt="xd"
                />
              </div>
              <div className="Options">
                <div className="ButtonsGuesses">
                  <button className="Guess" onClick={() => answerUpdate(0)}>
                    {pokemon[0].name.charAt(0).toUpperCase() +
                      pokemon[0].name.slice(1)}
                  </button>
                </div>
                <div className="ButtonsGuesses">
                  <button className="Guess" onClick={() => answerUpdate(1)}>
                    {pokemon[1].name.charAt(0).toUpperCase() +
                      pokemon[1].name.slice(1)}
                  </button>
                </div>
                <div className="ButtonsGuesses">
                  <button className="Guess" onClick={() => answerUpdate(2)}>
                    {pokemon[2].name.charAt(0).toUpperCase() +
                      pokemon[2].name.slice(1)}
                  </button>
                </div>
                <div className="ButtonsGuesses">
                  <button className="Guess" onClick={() => answerUpdate(3)}>
                    {pokemon[3].name.charAt(0).toUpperCase() +
                      pokemon[3].name.slice(1)}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/*loading pokemon*/}
        {load && (
          <div className="App-body">
            <div className="Body-contents">
              <div className="load Poke">
                <h3>Loading Pokemon</h3>
              </div>
            </div>
          </div>
        )}

        {/*get user to request a new quiz*/}
        {!load && (!started || answer !== null) && (
          <div className="App-body">
            {/* They guessed correctly */}
            {answer === correct && answer !== null && (
              <div className="Answer-div">
                <img
                  className="Shown-img Poke"
                  src={pokemon[correct].sprites.front_default}
                  alt="xd"
                />
                <div className="Answer-text">
                  <p>
                    It's{" "}
                    {pokemon[correct].name.charAt(0).toUpperCase() +
                      pokemon[correct].name.slice(1)}
                    {""}!
                  </p>
                  <p>You are correct!</p>
                  <div className="Button-div">
                    <button
                      className="newQuizButton"
                      onClick={() => getPokemon()}
                    >
                      Play Again
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* They guessed incorrectly */}
            {answer !== correct && answer !== null && (
              <div className="Answer-div Poke">
                <img
                  className="Shown-img"
                  src={pokemon[correct].sprites.front_default}
                  alt="xd"
                />
                <div className="Answer-text">
                  <p>
                    It's{" "}
                    {pokemon[correct].name.charAt(0).toUpperCase() +
                      pokemon[correct].name.slice(1)}
                    {""}!
                  </p>
                  <p>
                    You guessed it was{" "}
                    {pokemon[answer].name.charAt(0).toUpperCase() +
                      pokemon[answer].name.slice(1)}
                    {""}. Try again!
                  </p>
                  <div className="Button-div">
                    <button
                      className="newQuizButton"
                      onClick={() => getPokemon()}
                    >
                      Play Again
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* if the quiz has been answered, give the option to reset */}
            {!started && (
              <div className="Body-contents">
                <button className="startButton" onClick={() => getPokemon()}>
                  Start Quiz
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};
