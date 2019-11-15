import React, { useEffect, useState } from "react";


import axios from 'axios';

import CharacterCard from "./CharacterCard";

import styled from "styled-components";


export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const[character, setCharacter] = useState([]);
  

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    const setCharacter=()=>{
      axios
      .get('https://rickandmortyapi.com/api/character/')
      .then(response => {
        setCharacter(response.data);
      })
      .catch(error => {
        console.log('Server Error', error);
      });
    }
    
  }, [setCharacter]);

  return (
    <section className="character-list">
      {/* <h2>TODO: `array.map()` over your state here!</h2> */}
      {character.map(character => (
          <CharacterCard key={character.id} character={character} />
        ))}
      
    </section>
  );
}
const StyledSection = styled.section`
margin-top: 30px;
`;