import { useEffect, useState } from "react";
import "../../scss/pages/Pokemon.scss";

import PokeCard from "../PokeCard";
import { PokemonClient } from "pokenode-ts";

const Pokemon = () => {
  const [pokemonData, setPokemonData] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const api = new PokemonClient();

  const fetchPokeList = async () => {
    try {
      const res = await api.listPokemons(0, 1017);
      const pokeNames = res.results.map((pokemon) => pokemon.name);
      setPokemonData(pokeNames);
    } catch (error) {
      console.log("error: ", error);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchPokeList();
    setLoading(false);
  }, []);
  
  return (
      <>
      <div className="mx-2 row row-cols-xs-2 row-cols-sm-3 row-cols-md-3 row-cols-xl-4 row-cols-xxl-5">
      {
        pokemonData.map((pokemon) =>
        <div className="col my-1">
          <PokeCard pokeNameProp={ pokemon } />
        </div>)
      }
      </div>    
      </>
  );
};

export default Pokemon;
