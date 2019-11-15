import React from "react";
import { Route } from 'react-router-dom';

import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage";

import CharacterList from "./components/CharacterList";
import CharacterCard from "./components/CharacterCard.js";

export default function App() {

 return (
   
   <main>
     <Header />
     <Route exact path='/' component={WelcomePage}/>
     <Route  path='/' component={CharacterCard}/>
    <Route  path='/characters'component={CharacterList}/>
   </main>
 );
}