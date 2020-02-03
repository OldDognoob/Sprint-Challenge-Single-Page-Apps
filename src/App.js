import React from "react";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage.js";
import CharacterList from "./components/CharacterList";
import EpisodeList from "./components/EpisodeList";
import LocationList from "./components/LocationsList";
import {Route} from "react-router-dom";

// import WelcomePage from "./components/WelcomePage";
 
 
export default function App() {
  return (
    <main>
      <Header />
      <WelcomePage />
      <Route path="/characters" component={CharacterList} />
      <Route path="/episode" component={EpisodeList} />
      <Route path="/location" component={LocationList}/>
    </main>
  );
}
