import { PokemonClient } from "pokenode-ts";
import { useEffect, useState } from "react";

import "../../scss/components/TileDisplayFormat.scss";
import "../../App.scss";

import PokemonCard from "../PokemonCard";

//Get icons to load properly

const Pokemon = () => {
  const [pokemonData, setPokemonData] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const api = new PokemonClient();

  const fetchPokeList = async() => {
    try {
      const res = await api.listPokemons(0, 1025);
      const pokeNames = res.results.map(pokemon => pokemon.name);
      setPokemonData(pokeNames);
    } catch (error) {
      console.log('error: ', error);
    }
  }

  useEffect(() => {
    setLoading(true);
    fetchPokeList();
    setLoading(false);
  }, []);


  return (
    <>
      <div className="main-screen">
        <div className="title-text">
          <h1>Pokémon</h1>
        </div>
        <div className="tile-display">
          {
            loading ? <h1>Loading...</h1> :
            pokemonData.map((pokemon) => (
              <PokemonCard pokeNameProp={ pokemon } />
            )) 
          }
        </div>
      </div>
    </>
  );
};

export default Pokemon;
