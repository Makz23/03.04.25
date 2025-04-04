import React from "react";
import ReactDOM from "react-dom/client";
import "./scss/main.css";
// ---------------------------------------
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// ---------------------------------------

import A1 from "./components/Location";
import Header from "./components/Header";
import "./components/Locations";
import Locations from "./components/Locations";
import Characters from "./components/Characters";
import Episodes from "./components/Episodes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/a1">Przejdź do A1</Link>
          </li>
          <li>
            <Link to="/a2">Przejdź do A2</Link>
          </li>
          <li>
            <Link to="/a3">Przejdź do A3</Link>
          </li>
          <li>
            <Link to="/a4">Przejdź do A4</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/a1" element={<Locations />} />
        <Route path="/a2" element={<Characters />} />
        <Route path="/a3" element={<Episodes />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
