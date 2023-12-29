import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import Pokemon from "./components/pages/Pokemon";

import "../node_modules/bootstrap/scss/bootstrap.scss";
import "./App.scss";

// Add other tile menus after tile clicks
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>} />
          <Route path="/pokemon" element={<Pokemon />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
