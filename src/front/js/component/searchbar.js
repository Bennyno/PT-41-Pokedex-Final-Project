import React, { useEffect, useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Searchbar = () => {
    const { store, actions } = useContext(Context);
    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");

    const handleFilter = (event) => {
        const searchWord = event.target.value
        setWordEntered(searchWord);
        const newFilter = store.pokemon.filter((pokemon) => {
            return pokemon.name.toLowerCase().includes(searchWord.toLowerCase());
        });

        if(searchWord === ""){
            setFilteredData([])
        } else {
            setFilteredData(newFilter);
        }
    };
    
    const clearInput = () => {
        setFilteredData([]);
        setWordEntered("");
    }

    return (
        <div className="search">
            <form className="searchInputs">
                <input className="input" type="text" placeholder="Search Pokemon" value={wordEntered} onChange={handleFilter} />
                <div className="searchIcon">
                    {filteredData.length === 0 ? (
                        <i class="fas fa-search"></i>
                        ) : (
                            <i class="fas fa-times" id="clearBtn" onClick={clearInput}></i>
                        )}
                </div>
            </form>
            {filteredData.length != 0 && (
            <div className="searchResult">
            {filteredData.slice(0, 10).map((pokemon, index) => {
                return (
                    <Link className="searchItem" to={`/pokemon/${pokemon.id -1}`} key ={index} value={index}>
                    {pokemon.name}
                  </Link>
                )
                })}
            </div>
            )}
        </div>
    )
}