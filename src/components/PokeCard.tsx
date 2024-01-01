import { useEffect, useState } from "react";
import { PokemonClient, PokemonStat, PokemonType } from "pokenode-ts";

import "../scss/components/PokeCard.scss";

interface PokemonCardProps {
  pokeNameProp: string;
}

const PokeCard: React.FC<PokemonCardProps> = ({ pokeNameProp }) => {
  const pokeName = pokeNameProp;

  const [pokeSpriteUrl, setPokeSpriteUrl] = useState("");
  const [pokeTypes, setPokeTypes] = useState<PokemonType[]>();
  const [pokeStats, setPokeStats] = useState<PokemonStat[]>();

  const api = new PokemonClient();


  const getPokeInfo = async () => {
    try {
      const res = await api.getPokemonByName(pokeName);
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
    console.log(pokeTypes);
  }, []);

  return (
    <div className="poke-card container text-center m-1">
      <div className="row">
        <h2>{pokeName}</h2>
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
        <h6 className="base-stats">Base Stats</h6>
      </div>
      <div className="row row-cols-2 ">
        {pokeStats?.map((stats) => (
          <div className="col">
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
            : {stats.base_stat}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PokeCard;
