import { useState, useEffect } from "react";

import "../styles/App.css";
import Header from "../components/Header";
import Card from "../components/Card";
import Footer from "../components/Footer";



function App() {


  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);


  const [cardSelect, setCardSelect] = useState(0) 

    useEffect(() => { 


    }, [cardSelect])

  // state of the page changes when pokecards are interacted with 

  
  

  return (
    <div className="container">
      <Header score={score} bestScore={bestScore}/>
      <main className="main-container">
          <div className="card-container">
            <Card />
          </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
