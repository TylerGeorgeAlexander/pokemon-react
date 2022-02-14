import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import PokeName from "./PokeName";

export default function PokeCard() {
  const { pokeId } = useParams();
  const history = useHistory();

  const [index, setIndex] = useState([]);

  // Used this url for description
  const urlDesc = `https://pokeapi.co/api/v2/characteristic/${pokeId}/`;

  const url = `https://pokeapi.co/api/v2/pokemon/${pokeId}`;

  // Pokemon Name
  const [pokemon, setPokemon] = useState([]);
  // Pokemon Characteristics
  const [desc, setDesc] = useState("Loading...");

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
      .then((data) => setDesc(data.descriptions[7].description));
  }, [urlDesc]);

  // Mapping different languages of description
  // TODO implement a dropdown menu for selecting languages
  // let descMap = "Loading...";
  // if (desc) {
  //   descMap = desc.descriptions.map((language) => {
  //     return (
  //       <div className="row">
  //         <div className="col">
  //           <p className="nes-balloon from-right nes-pointer">{language.description}</p>
  //         </div>
  //       </div>
  //     );
  //   });
  // }

  const nextHandler = async () => {
    if (index > 0) {
      history.push(`/${index + 1}`);
    }
  };

  const previousHandler = async () => {
    if (index > 1) {
      history.push(`/${index - 1}`);
    }
  };

  // TEST AREA FOR CONSOLE LOG
  // console.log(desc);

  // TODO Implement clickHandlers for the button to go to the next pokemon in pokedex
  return (
    <div className="App">
      <div className="nes-container">
        <img
          className="img-fluid mx-auto d-block mb-2"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokeId}.svg`}
          alt="..."
          style={{ width: " width: 100%" }}
        />

        <div className="nes-container with-title is-centered">
          <PokeName pokemon={pokemon} setPokemon={setPokemon} pokeId={pokeId} />

          <p>ID: {index}</p>
          <div className="lists">
            <ul className="card-text nes-list is-disc">Description: {desc}</ul>
          </div>
          <button
            type="button"
            onClick={nextHandler}
            className="nes-btn is-primary m-2"
          >
            Next
          </button>
          <button
            type="button"
            onClick={previousHandler}
            className="nes-btn is-primary m-2"
          >
            Previous
          </button>
        </div>
      </div>
    </div>
  );
}
