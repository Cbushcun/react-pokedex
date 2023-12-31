import { BrowserRouter, Routes, Route } from "react-router-dom";

import "../node_modules/bootstrap/scss/bootstrap.scss";
import "./App.scss";

import Background from "./components/Background";

// Add other tile menus after tile clicks
function App() {

  return (
    <>
      <Background />
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
