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
          {/* add propigation or whatever so that the app screen can change depedning on anchor element selection */}
        </div>
      </div>
    </>
  );
}

export default App;
