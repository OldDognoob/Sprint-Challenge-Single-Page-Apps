import React, { useEffect, useState } from "react";


import axios from 'axios';

import CharacterCard from "./CharacterCard";

import styled from "styled-components";

import {Link} from "react-router-dom";

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
        setCharacter(response.data.results);
      })
      .catch(error => {
        console.log('Server Error', error);
      });
    }
    
  }, [character]);
  console.log(character);

  return (
    <section className="character-list">
      <Link to= "/"><button>Home</button></Link>
      <Link to= "/search"><button>Search</button></Link>


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