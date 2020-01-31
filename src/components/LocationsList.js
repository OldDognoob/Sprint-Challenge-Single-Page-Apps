//import react and destructuring useState & useEffect
import React, { useEffect, useState } from "react";


import LocationCard from "./LocationCard";

//import axios
import axios from "axios";


export default function LocationsList() {
    // set up the slice of state and the setter function
    const[location, setLocation]=useState([]);

    useEffect(() => {
        //were axios and side effects are living here
        axios
        .get('https://rickandmortyapi.com/api/location/ ')
        .then(response =>{
            console.log(response.data.results);
            setLocation(response.data.results);
        })
        .catch(error =>{
            console.log(error);
        });
        //an empty array to prevent the infinity loop
    }, []);

    return (
        <section className="character-list">
            <h2>We are back!</h2>
            {
                location.map((location) =>{
                    return<LocationCard  key={location.id} locationCard={location}/>
                })
            }
        </section>
    )
}
