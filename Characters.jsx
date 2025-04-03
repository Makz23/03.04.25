import React, { useState, useEffect } from "react";

import A1 from "./A1";
function Characters() {
  
  function addCharacter({ id, name, dimension, type, }) {
    return (
      <A1
        key={id}
        id={id}
        name={name}
        dimension={dimension}
        type={type}
      />
      
    );
  }

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/location")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setCharacters(data.results); // <---------
      })
      .catch((error) => {
        console.error("Error fetching characters:", error);
      });
  }, []); // Pusty array dependency powoduje, że fetch zostanie wykonany tylko raz po zamontowaniu komponentu

  return <div>{characters.map((character) => addCharacter(character))}</div>;
}

export default Characters;
