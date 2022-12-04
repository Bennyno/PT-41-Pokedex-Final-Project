import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import pokeApp from "../../img/logo.jpg";
import { DropDownMenu } from "./dropdown";

export const Navbar = () => {
  const { store, actions } = useContext(Context);

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">
          <img
            className="pokemon-logo"
            src={pokeApp}
          />
        </Link>
      </div>
      <div className="nav-pokeballs">
        {!store.token ? (
          <Link to="/login">
            <button className="btn btn-primary">
              <img
                src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/10324630-3bf7-4d5b-831a-c931da9b6de5/d68qhko-073b6da3-7e9f-42dd-8499-613c4062a984.png/v1/fill/w_894,h_894,q_75,strp/ultraball_vector_by_britishtime-d68qhko.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl0sIm9iaiI6W1t7InBhdGgiOiIvZi8xMDMyNDYzMC0zYmY3LTRkNWItODMxYS1jOTMxZGE5YjZkZTUvZDY4cWhrby0wNzNiNmRhMy03ZTlmLTQyZGQtODQ5OS02MTNjNDA2MmE5ODQucG5nIiwid2lkdGgiOiI8PTg5NCIsImhlaWdodCI6Ijw9ODk0In1dXX0.24x8v_dH6XL2srropazgpZyR73Ia7eQtV3ZvfjVbA6g"
                className="ani-gscale ani-spin"
              />
              <div className="navbar-opts">Log In</div>
            </button>
          </Link>
        ) : (
          <Link to="/">
            <button
              onClick={() => actions.logout()}
              className="btn btn-primary"
            >
              <img
                src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/10324630-3bf7-4d5b-831a-c931da9b6de5/d68qhko-073b6da3-7e9f-42dd-8499-613c4062a984.png/v1/fill/w_894,h_894,q_75,strp/ultraball_vector_by_britishtime-d68qhko.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl0sIm9iaiI6W1t7InBhdGgiOiIvZi8xMDMyNDYzMC0zYmY3LTRkNWItODMxYS1jOTMxZGE5YjZkZTUvZDY4cWhrby0wNzNiNmRhMy03ZTlmLTQyZGQtODQ5OS02MTNjNDA2MmE5ODQucG5nIiwid2lkdGgiOiI8PTg5NCIsImhlaWdodCI6Ijw9ODk0In1dXX0.24x8v_dH6XL2srropazgpZyR73Ia7eQtV3ZvfjVbA6g"
                className="ani-gscale ani-spin"
              />
              <div className="navbar-opts">Logout</div>
            </button>
          </Link>
        )}
        <Link to="/game">
          <button className="btn btn-primary">
            <img
              src="https://jenessa-reika.ca/wp-content/uploads/2020/04/pokemon5-600x582.png"
              className="ani-gscale ani-spin"
            />
            <div className="navbar-opts">Play Game!</div>
          </button>
        </Link>
        <Link to="/regions">
          <button className="btn btn-primary">
            <img
              src="https://jenessa-reika.ca/wp-content/uploads/2020/04/pokemon3.png"
              className="ani-gscale ani-spin"
            />
            <div className="navbar-opts">Regions</div>
          </button>
        </Link>
        <Link to="/badges">
          <button className="btn btn-primary">
            <img
              src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/10324630-3bf7-4d5b-831a-c931da9b6de5/d68qj45-a689ae7a-ed22-4751-beea-9a5d9db0244f.png/v1/fill/w_894,h_894,strp/quickball_by_vongolaleader_d68qj45-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTAwIiwicGF0aCI6IlwvZlwvMTAzMjQ2MzAtM2JmNy00ZDViLTgzMWEtYzkzMWRhOWI2ZGU1XC9kNjhxajQ1LWE2ODlhZTdhLWVkMjItNDc1MS1iZWVhLTlhNWQ5ZGIwMjQ0Zi5wbmciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.WRA3a5SjREsLEEC_CbicaV1ZAR0mhPFr7xdxrc2mh_E"
              className="ani-gscale ani-spin"
            />
            <div className="navbar-opts">Gym Badges</div>
          </button>
        </Link>
        <div className="dropdown">
          <DropDownMenu />
        </div>
      </div>
    </nav>
  );
};
