import React, { useState, useEffect, useContext } from "react";
import { ProgressBar } from "react-bootstrap";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const TYPE_COLORS = {
  bug: "B1C12E",
  dark: "4F3A2D",
  dragon: "755EDF",
  electric: "FCBC17",
  fairy: "F4B1F4",
  fighting: "823551D",
  fire: "E73B0C",
  flying: "A3B3F7",
  ghost: "6060B2",
  grass: "74C236",
  ground: "D3B357",
  ice: "A3E7FD",
  normal: "C8C4BC",
  poison: "934594",
  psychic: "ED4882",
  rock: "B9A156",
  steel: "B5B5C3",
  water: "3295F6",
};

export const Pokemon = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const [p_type, setType] = useState([]);
  const [stat_names, setStat_names] = useState([]);
  const [stats, setStats] = useState([]);
  const [data, setData] = useState({});
  const [render, rerender] = useState(false);

  useEffect(() => {
    actions.rehydrate();
    setData(store.pokemon[params.id]);

    setType(
      data?.type?.split(",").map((types) => {
        return types.trim();
      })
    );

    setStat_names(
      data?.stat_names?.split(",").map((names) => {
        return names.trim();
      })
    );

    setStats(
      data.stats?.split(",").map((stats) => {
        return stats.trim(stats);
      })
    );
    rerender(!render);
    console.log(stats);
    for (let i = 0; i < stat_names?.length; i++) {
      console.log(stat_names[i]);
    }
  }, [store.pokemon]);

    console.log(params.flavor_text);
  return (
    <div className="jumbotron">
      <div>
        <img className="soloimg" src={data.image} />
        <h1 className="display-4">{data.name}</h1>
        <div className="grid">
          <p className="single typingPoke">
            {p_type?.map((type) => (
              <span
                key={type}
                className="badge badge-pill mr-1"
                style={{
                  backgroundColor: `#${TYPE_COLORS[type]}`,
                  color: "white",
                }}
              >
                {type
                  .toLowerCase()
                  .split(" ")
                  .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
                  .join(" ")}
              </span>
            ))}
          </p>

          <p className="single">
            <strong>Number:</strong> {data.id}
          </p>
          <p className="single">
            <strong>Abilities:</strong> {data.abilities}
          </p>
          <p className="single">
            <strong>Height:</strong> {data.height}
          </p>
          <p className="single-last">
            <strong>Weight:</strong> {data.weight}
          </p>
        </div>

        <div className="statsGraph">
          <h4>Base Stats</h4>
          {stat_names?.map((name, idx) => {
            return (
              <>
                <strong>{name?.toUpperCase()}</strong>
                <ProgressBar now={stats[idx]} max={255} label={stats[idx]} />
              </>
            );
          })}
        </div>
        <p className="detail">{data.flavor_text}</p>
        {/* <p className="detail">
          This is {data.name}. <br></br>
		  It is a {data.type} type pokemon and it's pokedex number is {data.id}. <br></br>
		  It has the abilities {data.abilities} and it's {data.stat_names} stats are {data.stats} respectively. 
        </p> */}
      </div>
      <hr className="my-4" />
      <Link to="/">
        <span className="btn btn-danger btn-lg" role="button">
          Back home
        </span>
      </Link>
    </div>
  );
};

Pokemon.propTypes = {
  match: PropTypes.object,
};
