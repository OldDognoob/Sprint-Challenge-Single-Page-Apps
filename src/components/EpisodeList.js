//import react and destructuring useState & useEffect
import React, {useState, useEffect} from "react";
//import axios
import axios from "axios";

import EpisodeCard from "./EpisodeCart";

export default function EpisodeList() {
    // set up the slice of state and the setter function
  const[episode, setEpisode]= useState([]);

  useEffect(() =>{
      // were axios and side effects are living here
      axios
      .get('https://rickandmortyapi.com/api/episode/ ')
      .then(response => {
          console.log(response.data.results);
          setEpisode(response.data.results);
      })
      .catch(error =>{
          console.log(error);
      })
      // an empty array to prevent an infinity loop
  }, []);

  return (
      <section className= "character-list">
          <h2>We are back!</h2>
          {
              episode.map((episode) =>{
                  return <EpisodeCard  episodeCard={episode}/>
              })
          }
      </section>
  )
}