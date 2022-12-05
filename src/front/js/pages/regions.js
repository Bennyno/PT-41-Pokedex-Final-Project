import React, { useEffect, useContext, useState } from "react";
import Kanto from "../../img/Kanto Map.jpg";
import Johto from "../../img/Johto Map.jpg";
import Hoenn from "../../img/Hoenn map.jpg";
import Sinnoh from "../../img/Sinnoh Map.jpg";
import Unova from "../../img/Unova Map.jpg";
import Kalos from "../../img/Kalos map.jpg";
import Alola from "../../img/alola map.jpg";
import Galar from "../../img/Galar map.jpg";
import { Link } from "react-router-dom";

export const Regions = () => {
  return (
    <div className="bg-region">
      <div className="container all-regions">
        <h1 className="page-title">
          <strong>Regions</strong>
        </h1>

        <h2 className="region-name">Kanto</h2>

        <img className="regions" src={Kanto} />

        <p className="region-info">
          Kanto was the first region to be introduced in the game series,
          featured in the Red, Blue and Yellow games along with the Generation
          III remakes and the Generation VII remakes. <br />
          It is also accessible in the latter portion of Pokémon Gold, Silver,
          and Crystal after defeating the Elite Four.
        </p>
        <h2 className="region-name">Johto</h2>

        <img className="regions" src={Johto} />

        <p className="region-info">
          Johto is the second region introduced in the main game series, being
          featured in the Gold, Silver and Crystal games along with the
          Generation IV remakes. <br />
          Geographically, Johto is located to the west of the Kanto region.
        </p>
        <h2 className="region-name">Hoenn</h2>

        <img className="regions" src={Hoenn} />

        <p className="region-info">
          Hoenn is the featured region in the Generation III games, Pokémon
          Ruby, Sapphire and Emerald games along with the Generation VI remakes.{" "}
          <br />
          Geographically, Hoenn is located to the southwest of Kanto and Johto.
        </p>
        <h2 className="region-name">Sinnoh</h2>

        <img className="regions" src={Sinnoh} />

        <p className="region-info">
          Sinnoh is the region featured in the Generation IV games Pokémon
          Diamond, Pearl and Platinum games along with the Generation VIII
          remakes. <br />
          Sinnoh is located to the north of the Kanto region.
        </p>
        <h2 className="region-name">Unova</h2>

        <img className="regions" src={Unova} />

        <p className="region-info">
          Unova is the region featured in the Generation V games Pokémon Black
          and White and Black and White 2. <br />
          It is said that Unova is located very far away from the other regions,
          needing a boat to get there.
        </p>
        <h2 className="region-name">Kalos</h2>

        <img className="regions" src={Kalos} />

        <p className="region-info">
          Kalos is the sixth region that appeared in Generation VI's game
          Pokémon X and Y. It is based off France. <br /> The regional scientist
          is Professor Sycamore, living in Lumiose City. It has warm seas around
          it, as West Sea Shellos and Gastrodon inhabit the region
        </p>
        <h2 className="region-name">Alola</h2>
        <div className="regions">
          <img className="regions" src={Alola} />
        </div>
        <p className="region-info">
          Alola is the seventh region that appeared in Generation VII's games
          Pokémon Sun and Moon and Pokémon Ultra Sun and Ultra Moon. <br />
          The region has cold seas around it, as East Sea Shellos and Gastrodon
          inhabit it.
        </p>
        <h2 className="region-name">Galar</h2>

        <img className="regions" src={Galar} />

        <p className="region-info">
          Galar is the eighth region that appeared in Generation VIII's game
          Pokémon Sword and Shield. <br />
          It is based off the United Kingdom. The region has cold seas around
          it, as East Sea Shellos and Gastrodon inhabit it.
        </p>
        <h2 className="more-region-info">
          For more information about the different regions{" "}
          <a href="https://pokemon.fandom.com/wiki/Regions">click here!</a>
        </h2>
      </div>
    </div>
  );
};
