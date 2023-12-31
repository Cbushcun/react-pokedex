import "../scss/components/TileComponent.scss"

const TileComponent = ({
  iconUrl,
  iconText,
  tileRoute,
}: {
  iconUrl: string;
  iconText: string;
  tileRoute: string;
}) => {

  return (
    <>
      <a className="tile-container" href={ tileRoute }>
        <img src={ iconUrl } className="tile-img" loading="lazy"/>
        <p>{ iconText }</p>
      </a>
    </>
  );
};

export default TileComponent;
