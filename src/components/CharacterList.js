import React, { useEffect, useState } from "react";
import axios from 'axios';


export default function CharacterList(props) {
 // TODO: Add useState to track data from useEffect
 const [character, setCharacter] = useState([])
 useEffect(() => {
   const getCharacters = () => {
     axios
     .get('https://rickandmortyapi.com/api/character/')
     .then(response => {
       setCharacters(response.data);
   })
   .catch(error => {
     console.error('Server Error', error);
   });
}
getCharacters();
}, []);
  return (
    <section className="character-list">
      <h2>TODO: `array.map()` over your state here!</h2>
     {
       character.map(character => {
         return(
           <CharacterCard
           key={character.id}
           name={character.name}
           status={character.status}
           species={character.species}
           origin={character.origin}
           />
         )
       })
     }
    </section>
  );
}
