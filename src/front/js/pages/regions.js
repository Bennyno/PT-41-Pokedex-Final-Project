import React, { useEffect, useContext, useState } from "react";

export const Regions = () => {

    return (
        <>
        <h1 className="page-title"><strong>Regions</strong></h1>
        <h2>Kanto</h2>
        <div>
            <img 
            className ="regions"
            src="https://static.wikia.nocookie.net/pokemon/images/8/85/Kanto_Let%27s_Go%2C_Pikachu%21_and_Let%27s_Go%2C_Eevee%21.png"/>
        </div>
        <h2>Johto</h2>
        <div>
            <img 
            className ="regions"
            src="https://static.wikia.nocookie.net/pokemon/images/f/fe/Johto_HGSS.png"/>
        </div>
        <h2>Hoenn</h2>
        <div>
            <img 
            className ="regions"
            src="https://static.wikia.nocookie.net/pokemon/images/8/85/Hoenn_ORAS.png"/>
        </div>
        <h2>Sinnoh</h2>
        <div>
            <img 
            className ="regions"
            src="https://static.wikia.nocookie.net/pokemon/images/f/f8/Sinnoh_BDSP.png"/>
        </div>
        <h2>Unova</h2>
        <div>
            <img 
            className ="regions"
            src="https://static.wikia.nocookie.net/pokemon/images/f/fb/Isshu.jpg"/>
        </div>
        <h2>Kalos</h2>
        <div>
            <img 
            className ="regions"
            src="https://static.wikia.nocookie.net/pokemon/images/7/74/The_Kalos_Region.jpg"/>
        </div>
        <h2>Alola</h2>
        <div className ="regions">
            <img 
            className ="regions"
            src="https://static.wikia.nocookie.net/pokemon/images/6/6c/Alola.png"/>
        </div>
        <h2>Galar</h2>
        <div>
            <img 
            className ="regions"
            src="https://static.wikia.nocookie.net/pokemon/images/e/ea/GalarRegion.jpg"/>
        </div>
        </>
    )
}