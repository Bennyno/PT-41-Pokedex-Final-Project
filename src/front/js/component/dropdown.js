import React from "react";
import { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import  Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button"
import { Link } from "react-router-dom";

export const DropDownMenu = () => {
  const {store, actions} = useContext(Context);
  const [favorites, setFavorites] = useState({});
  const [selectedFavorites, setselectedFavorites] = useState({favorites:[]});

useEffect(()=> console.table(favorites), [favorites])

  const deleteFavoriteBtn = store.favorites.map((item, index) => {
    return (
      <Dropdown.Item key ={index} value={index}>
        <Link to={`/pokemon/${item?.id}`}>
          {item.name}
        </Link>
      <Button
        onClick={()=> actions.deleteFavorites(item)}
        className = "delete">
        <i class="fas fa-trash-alt"></i>
      </Button>
     </Dropdown.Item> 
    );
  });

  return(
  <>
    <Dropdown>
      <Dropdown.Toggle variant="primary" className="dropdown-basic">
      <img
		 src="https://www.freeiconspng.com/uploads/file-pokeball-png-0.png"
		 className="ani-gscale ani-spin"/>
        <div className="drp">
          <div className="drp counter">
            Favorites {store.favorites.length}
          </div>
        </div>
      </Dropdown.Toggle>

      <Dropdown.Menu
        defaultValue={favorites}
        onChange={(event) => {
          setFavorites(event.target.value);
          setselectedFavorites({
            ...selectedFavorites,
            favorites: store.favorites.find(
              (item) => item.id == event.target.value
            ),
          });
        }}
      >
        {deleteFavoriteBtn}
      </Dropdown.Menu>
  </Dropdown>
        </>
    );
};