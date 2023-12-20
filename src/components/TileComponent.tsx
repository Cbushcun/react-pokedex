import "../scss/components/TileComponent.scss"

const TileComponent = ({
  iconUrl,
  iconText,
}: {
  iconUrl: string;
  iconText: string;
}) => {

  return (
    <>
      <a className="tile-container">
        <img src={ iconUrl } className="tile-img" />
        <p>{ iconText }</p>
      </a>
    </>
  );
};

export default TileComponent;
