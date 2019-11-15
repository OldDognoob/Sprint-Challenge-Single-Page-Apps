import React from "react";
import CharacterList from './CharacterList';


export default function CharacterCard({character}) {
  return (
    <div>
      <h2>Name: {character.name}</h2>
      <p>Gender:{character.gender}</p>
      <p>Species:{character.species}</p>
      <p>Location:{character.location}</p>
    </div>
  );
}
 
  