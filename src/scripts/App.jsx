import { useState, useEffect } from "react";

import "../styles/App.css";
import Header from "../components/Header";
import Card from "../components/Card";
import { getPokemon } from "./pokemonApi";


function App() {


  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  

  const [cardSelect, setCardSelect] = useState([]) 

    useEffect(() => { 


    }, [cardSelect])

  // state of the page changes when pokecards are interacted with 
    console.log(getPokemon(151))
  
  

  return (
    <div className="container">
      <Header score={score} bestScore={bestScore}/>
      <main className="main-container">
          <div className="card-container">
            <Card />
          </div>
      </main>
    </div>
  );
}

export default App;
