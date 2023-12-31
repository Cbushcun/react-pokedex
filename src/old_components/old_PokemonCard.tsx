import { useEffect, useState } from "react";
import { PokemonClient } from "pokenode-ts";
import PokemonTileComponent from "./PokemonTileComponent";

interface PokemonCardProps {
    pokeNameProp: string;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokeNameProp }) => {
    const [pokeImgUrl, setPokeImgUrl] = useState('');

    const api = new PokemonClient();

    const getPokeInfo = async() => {
        try {
          const res = await api.getPokemonByName(pokeNameProp);
          const resSprite = res.sprites.front_default;
          if (resSprite) {
            setPokeImgUrl(resSprite);
          }
        } catch (error) {
          console.log('error: ', error);
        }
      }

    useEffect(() => {
        getPokeInfo();
    }, []);

  return (
    <>
      <PokemonTileComponent iconText={ pokeNameProp } iconUrl={ pokeImgUrl } tileRoute="" />
    </>
  );
};

export default PokemonCard;
