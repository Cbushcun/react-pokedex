import TileDisplay from "./components/TileDisplay";

import "../node_modules/bootstrap/scss/bootstrap.scss"
import "./App.scss";

// Add other tile menus after tile clicks
function App() {
  return (
    <>
      <div className="main-screen">
          <div className="title-text">
            <h1>Pokédex</h1>            
          </div>
          <TileDisplay />
        </div>
    </>
   );
}

export default App;
