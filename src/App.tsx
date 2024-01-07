import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.scss";
import Background from "./components/Background";
import Pokemon from "./components/pages/Pokemon";

// Add other tile menus after tile clicks
function App() {

  return (
    <>
      <Background />
      <BrowserRouter>
        <Routes>
          <Route index element={<Pokemon />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
