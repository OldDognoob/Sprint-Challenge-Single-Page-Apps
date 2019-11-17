import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";


export default function CharacterList() {
  const[character, setCharacter] = useState([]);
  const[filterCharacter,setFilterCharacter] = useState([]);
  const[matchCharacter, setMatchCharacter] = useState();
  // TODO: Add useState to track data from useEffect

  useEffect(() => {
    axios
     .get('https://rickandmortyapi.com/api/character/')
     .then(response =>{
      setCharacter(response.data.results)
      console.log(character);
     })
     .catch(error => {
       console.log(error);
     });
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

useEffect(() => {
search(matchCharacter)
}, [matchCharacter])




   function changeHandler(event) {
     setMatchCharacter(event.target.value)
     
   }

   function search(matchCharacter){
     const result=character.filter(card => card.name.toLowerCase().includes(matchCharacter.toLowerCase()))
     setCharacter(result)
   }

  return (
    <section className="character-list">
      <SearchForm changeHandler={changeHandler}/>
<h2>{character.map(card => {
    return <CharacterCard  data={card}   />
})}</h2>
    </section>
  );
}
