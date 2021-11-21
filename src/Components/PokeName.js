import React, { useEffect } from "react";
import capitalizeFirstLetter from "../utils/capitalizeFirstLetter";

export default function PokeName({pokemon, setPokemon, pokeId}) {
  // Used this url for name
  const url = `https://pokeapi.co/api/v2/pokemon/${pokeId}`;
  // Pokemon Name
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setPokemon(capitalizeFirstLetter(data.name)));
  }, [url]);

  return <h5 className="card-title title">{pokemon}</h5>;
}
