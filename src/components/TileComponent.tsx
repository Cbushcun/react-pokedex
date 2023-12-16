import { useState } from "react";
import "./scss/TileComponent.scss";

const TileComponent = ({
  iconUrl,
  iconText,
}: {
  iconUrl: string;
  iconText: string;
}) => {
  const [page, setPage] = useState<string>('Home');
  const [prevPage, setPrevPage] = useState<string>('');

  const handleClick = () => {
    
  }

  return (
    <>
      <a className="tile-container" >
        <img src={ iconUrl } className="tile-img" />
        <p>{ iconText }</p>
      </a>
    </>
  );
};

export default TileComponent;
