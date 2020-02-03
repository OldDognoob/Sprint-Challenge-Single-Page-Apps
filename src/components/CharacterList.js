//import react and destructuring useState & useEffect
import React, { useEffect, useState } from "react";

//import axios
import axios from "axios";

//import components files from components folder
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";


export default function CharacterList() {
  //set up the slices of state and the setter functions
  const[character, setCharacter] = useState([]);
  const[filterCharacter,setFilterCharacter] = useState([]);
  const[matchCharacter, setMatchCharacter] = useState();
  // TODO: Add useState to track data from useEffect

  useEffect(() => {
    //were axios and side effects are living here
    axios
     .get('https://rickandmortyapi.com/api/character/')
     .then(response =>{
      setCharacter(response.data.results)
      setFilterCharacter(response.data.results)
  
     })
     .catch(error => {
       console.log(error);
     });
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependencies array!
    //inserting an empty array to prevent an infinity loop
  }, []);

useEffect(() => {
search(matchCharacter)
}, [matchCharacter])




   function changeHandler(event) {
     setMatchCharacter(event.target.value)
     
   }

   function search(matchCharacter){
     const result=character.filter(card => card.name.toLowerCase().includes(matchCharacter.toLowerCase()))
     setFilterCharacter(result)
   }

  return (
    <section className="character-list">
      <SearchForm changeHandler={changeHandler}/>
<h2>{filterCharacter.map(card => {
    return <CharacterCard key={card.id} data={card}   />
})}</h2>
    </section>
  );
}
