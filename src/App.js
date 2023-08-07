import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
import {ActionMovies,Originals,Documentaries,RomanceMovies,HorrorMovies,ComedyMovies,trending} from "./urls";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost url={Originals} title="Netfilx Originals"/>
      <RowPost url={trending} title="Trending"/>
      <RowPost url={ActionMovies} title="Action" isSmall />
      <RowPost url={RomanceMovies} title="Romance" isSmall />
      <RowPost url={ComedyMovies} title="Comedy" isSmall />
      <RowPost url={HorrorMovies} title="Horror" isSmall />
      <RowPost url={Documentaries} title="Documentaries" isSmall />
    </div>
  );
}

export default App;
