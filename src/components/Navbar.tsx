import "../scss/components/Navbar.scss";

const Navbar = () => {
  return (
    <ul className="nav nav-tabs justify-content-center">
      <li className="nav-item">
        <a href="#" className="active nav-link">
          Pokemon
        </a>
      </li>
      <li className="nav-item">
        <a href="#" className="nav-link">
          Items
        </a>
      </li>
      <li className="nav-item">
        <a href="#" className="nav-link">
          Regions
        </a>
      </li>
      <li className="nav-item">
        <a href="#" className="nav-link">
          Generations
        </a>
      </li>
      <li className="nav-item">
        <a href="#" className="nav-link">
          Games
        </a>
      </li>
    </ul>
  );
};

export default Navbar;
