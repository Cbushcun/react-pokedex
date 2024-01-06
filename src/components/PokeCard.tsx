import { useEffect, useState } from "react";
import { PokemonClient, PokemonStat, PokemonType } from "pokenode-ts";

import "../scss/components/PokeCard.scss";

interface PokemonCardProps {
  pokeNameProp: string;
}

const PokeCard: React.FC<PokemonCardProps> = ({ pokeNameProp }) => {
  // Pokemon Name for card
  const pokeName = pokeNameProp;

  // Pokemon information variable useStates
  const [pokeSpriteUrl, setPokeSpriteUrl] = useState("");
  const [pokeTypes, setPokeTypes] = useState<PokemonType[]>();
  const [pokeStats, setPokeStats] = useState<PokemonStat[]>();

  // Capitalized variables for page display
  const pokeTitle = capitalizeTitle(pokeName);

  // API creation
  const api = new PokemonClient();

  // Obtain information for card display
  const getPokeInfo = async () => {
    try {
      const res = await api.getPokemonByName(pokeName);
      // Checks for sprite, types, and stats to set variables
      if (res.sprites.front_default && res.types && res.stats) {
        setPokeSpriteUrl(res.sprites.front_default);
        setPokeTypes(res.types);
        setPokeStats(res.stats);
      }
    } catch (error) {
      console.log("error: ", error);
    }
  };

  useEffect(() => {
    getPokeInfo();
  }, []);

  // Capitalize names for displaying outside of data handling
  function capitalizeTitle(input: string): string {
    return input
      .toLowerCase()
      .replace(/(^|\s)\S/g, (char) => char.toUpperCase());
  }

  return (
    <div className="poke-card container text-center m-1">
      <a href={"/pokemon?name=" + pokeName} className="card-link">
        <div className="row">
          <h2>
            <strong>{pokeTitle}</strong>
          </h2>
        </div>
        <div className="row">
          <img src={pokeSpriteUrl} className="poke-img col" loading="lazy" />
        </div>
        <div className="row">
          {pokeTypes?.map((type) => (
            <div className={"col " + type.type.name}>{type.type.name}</div>
          ))}
        </div>
        <div className="row">
          <h6 className="base-stats">
            <strong>Base Stats</strong>
          </h6>
        </div>
        <div className="row row-cols-2 ">
          {pokeStats?.map((stats) => (
            <div className="col">
              <strong>
                {stats.stat.name === "attack"
                  ? "atk"
                  : stats.stat.name === "defense"
                  ? "def"
                  : stats.stat.name === "special-attack"
                  ? "sp-atk"
                  : stats.stat.name === "special-defense"
                  ? "sp-def"
                  : stats.stat.name === "speed"
                  ? "spd"
                  : stats.stat.name}
                :
              </strong>{" "}
              {stats.base_stat}
            </div>
          ))}
        </div>
      </a>
    </div>
  );
};

export default PokeCard;
