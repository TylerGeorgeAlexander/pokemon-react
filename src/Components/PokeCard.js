import React, { useEffect, useState } from "react";
import { Route, Routes, useParams, useHistory, Link } from "react-router-dom";

export default function PokeCard() {
  const { pokeId } = useParams();
  const history = useHistory();

  const [index, setIndex] = useState([]);
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
  }, [url]);

  // Pokemon ID
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setIndex(data.id));
  }, [url]);

  // Pokemon Characteristics Description
  useEffect(() => {
    fetch(urlDesc)
      .then((response) => response.json())
      .then((data) => setDesc(data.descriptions));
  }, [urlDesc]);

  // Make sure to invoke this on a then chain or async await
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  // Mapping different languages of description
  // TODO implement a dropdown menu for selecting languages
  let descMap = "Loading...";
  if (desc) {
    descMap = desc.map((d) => {
      return <li className="">{d.description}</li>;
    });
  }

  const nextHandler = async () => {
    history.push(`/${index + 1}`);
  };

  const previousHandler = async () => {
    history.push(`/${index - 1}`);
  };

  // TEST AREA FOR CONSOLE LOG
  console.log(desc);

  // TODO Implement clickHandlers for the button to go to the next pokemon in pokedex
  return (
    <div className="App">
      <div className="nes-container">
        <img
          className="img-fluid mx-auto d-block"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokeId}.svg`}
          alt="..."
          style={{ width: " width: 100%" }}
        />

        <div className="nes-container with-title is-centered">
          <h5 className="card-title title">{pokemon}</h5>

          <div className="lists">
            <ul className="card-text nes-list is-disc">{descMap}</ul>
          </div>
          <p>{index}</p>
          <button onClick={nextHandler} className="nes-btn is-primary m-2">
            Next
          </button>
          <button onClick={previousHandler} className="nes-btn is-primary m-2">
            Previous
          </button>
        </div>
      </div>
    </div>
  );
}
