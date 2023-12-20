import "../../scss/components/TileDisplayFormat.scss";
import "../../App.scss";

import TileComponent from "../TileComponent";

import searchIcon from "../../assets/tile-icons/search.svg";
import pokemonIcon from "../../assets/tile-icons/pokemon.svg";
import regionIcon from "../../assets/tile-icons/regions.svg";
import itemsIcon from "../../assets/tile-icons/items.svg";
import abilitiesIcon from "../../assets/tile-icons/abilities.svg";
import movesIcon from "../../assets/tile-icons/moves.svg";

const HomeScreen = () => {
  return (
    <div className="main-screen">
      <div className="title-text">
        <h1>Pokédex</h1>
      </div>
      <div className="tile-display">
        <TileComponent iconUrl={searchIcon} iconText="Search" />
        <TileComponent iconUrl={pokemonIcon} iconText="Pokémon" />
        <TileComponent iconUrl={regionIcon} iconText="Regions" />
        <TileComponent iconUrl={itemsIcon} iconText="Items" />
        <TileComponent iconUrl={abilitiesIcon} iconText="Abilities" />
        <TileComponent iconUrl={movesIcon} iconText="Moves" />
      </div>
    </div>
  );
};

export default HomeScreen;
