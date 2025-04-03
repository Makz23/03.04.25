import React from "react";
import ReactDOM from "react-dom/client";
import "./scss/main.css";
// ---------------------------------------
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// ---------------------------------------

import A1 from "./components/A1";
import Header from "./components/header";

import "./components/Characters";
import Characters from "./components/Characters";


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
       <Route path="/a1" element={<A1/>}/>

     </Routes>
   </BrowserRouter>

   <Characters />
 </React.StrictMode>
 
);

