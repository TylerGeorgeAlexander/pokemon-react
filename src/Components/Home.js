import { useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [pokemonId, setPokemonId] = useState([]);

  function pokemonAlert() {
    if (pokemonId <= 0) {
      window.confirm("There is not a Pokemon at that ID");
    }
  }

  return (
    <div>
      <form>
        <div class="nes-field">
          <label for="pokemon_id">Pokemon #</label>
          <input
            type="number"
            id="pokemon_id"
            className="nes-input"
            onChange={(event) =>
              event.target.value > 0
                ? setPokemonId(event.target.value)
                : setPokemonId(0)
            }
          />
        </div>
      </form>
      <Link to={pokemonId}>
        <button type="button" className="nes-btn is-primary centered" onClick={pokemonAlert}>
          Go
        </button>
      </Link>
    </div>
  );
}
