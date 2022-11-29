import React, { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";

export const Regions = () => {

    return (
        <>
        <h1 className="page-title"><strong>Regions</strong></h1>
        
        <h2 className="region-name">Kanto</h2>
        <div>
            <img 
            className ="regions"
            src="https://static.wikia.nocookie.net/pokemon/images/8/85/Kanto_Let%27s_Go%2C_Pikachu%21_and_Let%27s_Go%2C_Eevee%21.png"/>
        </div>
        <p className="region-info">Kanto was the first region to be introduced in the game series, featured in the Red, Blue and Yellow games along with the Generation III remakes and the Generation VII remakes. <br/>
        It is also accessible in the latter portion of Pokémon Gold, Silver, and Crystal after defeating the Elite Four.</p>
        <h2 className="region-name">Johto</h2>
        <div>
            <img 
            className ="regions"
            src="https://static.wikia.nocookie.net/pokemon/images/f/fe/Johto_HGSS.png"/>
        </div>
        <p className="region-info">Johto is the second region introduced in the main game series, being featured in the Gold, Silver and Crystal games along with the Generation IV remakes. <br/>
        Geographically, Johto is located to the west of the Kanto region.</p>
        <h2 className="region-name">Hoenn</h2>
        <div>
            <img 
            className ="regions"
            src="https://static.wikia.nocookie.net/pokemon/images/8/85/Hoenn_ORAS.png"/>
        </div>
        <p className="region-info">Hoenn is the featured region in the Generation III games, Pokémon Ruby, Sapphire and Emerald games along with the Generation VI remakes. <br/>
        Geographically, Hoenn is located to the southwest of Kanto and Johto.</p>
        <h2 className="region-name">Sinnoh</h2>
        <div>
            <img 
            className ="regions"
            src="https://static.wikia.nocookie.net/pokemon/images/f/f8/Sinnoh_BDSP.png"/>
        </div>
        <p className="region-info">Sinnoh is the region featured in the Generation IV games Pokémon Diamond, Pearl and Platinum games along with the Generation VIII remakes. <br/>
        Sinnoh is located to the north of the Kanto region.</p>
        <h2 className="region-name">Unova</h2>
        <div>
            <img 
            className ="regions"
            src="https://static.wikia.nocookie.net/pokemon/images/f/fb/Isshu.jpg"/>
        </div>
        <p className="region-info">Unova is the region featured in the Generation V games Pokémon Black and White and Black and White 2. <br/>
        It is said that Unova is located very far away from the other regions, needing a boat to get there.</p>
        <h2 className="region-name">Kalos</h2>
        <div>
            <img 
            className ="regions"
            src="https://static.wikia.nocookie.net/pokemon/images/7/74/The_Kalos_Region.jpg"/>
        </div>
        <p className="region-info">Kalos is the sixth region that appeared in Generation VI's game Pokémon X and Y. 
        It is based off France. <br/> The regional scientist is Professor Sycamore, living in Lumiose City. It has warm seas around it, as West Sea Shellos and Gastrodon inhabit the region</p>
        <h2 className="region-name">Alola</h2>
        <div className ="regions">
            <img 
            className ="regions"
            src="https://static.wikia.nocookie.net/pokemon/images/6/6c/Alola.png"/>
        </div>
        <p className="region-info">Alola is the seventh region that appeared in Generation VII's games Pokémon Sun and Moon and Pokémon Ultra Sun and Ultra Moon. <br/>
        The region has cold seas around it, as East Sea Shellos and Gastrodon inhabit it.</p>
        <h2 className="region-name">Galar</h2>
        <div>
            <img 
            className ="regions"
            src="https://static.wikia.nocookie.net/pokemon/images/e/ea/GalarRegion.jpg"/>
        </div>
        <p className="region-info">Galar is the eighth region that appeared in Generation VIII's game Pokémon Sword and Shield. <br/>
        It is based off the United Kingdom. The region has cold seas around it, as East Sea Shellos and Gastrodon inhabit it.</p>
       <h2 className="more-region-info">For more information about the different regions <a href = "https://pokemon.fandom.com/wiki/Regions">click here!</a></h2>
        </>
    )
}