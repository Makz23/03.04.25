import React from "react";

function Character(props) {
  return (
    <div>
      <p>id: {props.id}</p>
      <p>name: {props.name}</p>
      <p>dimension {props.dimension}</p>
      <p>type {props.type}</p>
      <img src={props.image} alt="" />
    </div>
  );
}

export default Character;
