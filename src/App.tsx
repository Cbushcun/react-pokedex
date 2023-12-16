import HomeScreen from "./components/menu_screens/HomeScreen";

import "../node_modules/bootstrap/scss/bootstrap.scss"
import "./App.scss";


// Add other tile menus after tile clicks
function App() {
  return (
    <>
      <div className="main-screen">
        <div className="content-container">
          <div className="title-text">
            <h1>Pokedex</h1>            
          </div>
          <HomeScreen />
        </div>
      </div>
    </>
  );
}

export default App;
