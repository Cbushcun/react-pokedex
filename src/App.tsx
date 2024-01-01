import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.scss";

import Background from "./components/Background";
import GlassDisplay from "./components/GlassDisplay";
import Pokemon from "./components/pages/Pokemon";
import Navbar from "./components/Navbar";

// Add other tile menus after tile clicks
function App() {

  return (
    <>
      <Background />
      <Navbar />
      <GlassDisplay>
        <Pokemon />
      </GlassDisplay>

      <BrowserRouter>
        {/*<Routes>
          <Route index element={<Home/>} />
          <Route path="/pokemon" element={<Pokemon />} />
        </Routes>*/}
      </BrowserRouter>
    </>
  );
}

export default App;
