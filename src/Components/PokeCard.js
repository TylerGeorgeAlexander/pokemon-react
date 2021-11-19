import React, { useEffect, useState } from "react";
import { Route, Routes, useParams } from "react-router-dom";

export default function PokeCard() {
  const { pokeId } = useParams();

  // Used this url for name
  const url = `https://pokeapi.co/api/v2/pokemon/${pokeId}`;
  // Used this url for description
  const urlDesc = `https://pokeapi.co/api/v2/characteristic/${pokeId}/`;

  // Pokemon Name
  const [pokemon, setPokemon] = useState([]);
  // Pokemon Characteristics
  const [desc, setDesc] = useState([]);

  // Pokemon Name
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setPokemon(capitalizeFirstLetter(data.name)));
  }, []);

  // Pokemon Characteristics Description
  useEffect(() => {
    fetch(urlDesc)
      .then((response) => response.json())
      .then((data) => setDesc(data.descriptions[0].description));
  }, []);


// Make sure to invoke this on a then chain or async await
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  // TEST AREA FOR CONSOLE LOG
  console.log(desc);

  // TODO Implement clickHandlers for the button to go to the next pokemon in pokedex
  return (
    <div className="App">
      <div className="card">
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokeId}.svg`}
          alt="..."
          style={{ width: "10rem" }}
        />

        <div className="card-body">
          <h5 className="card-title">{pokemon}</h5>
          <p className="card-text">
            {`Description: ${desc}`}
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
}
