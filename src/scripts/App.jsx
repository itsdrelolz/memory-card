import { useState, useEffect } from "react";

import "../styles/App.css";
import Header from "../components/Header";
import Card from "../components/Card";




function App() {

  const [pokemonData, setPokemonData] = useState([
    { pokeImage: 'image1_url', pokeName: 'Pokemon 1' },
    { pokeImage: 'image2_url', pokeName: 'Pokemon 2' },
    { pokeImage: 'image3_url', pokeName: 'Pokemon 3' },
    { pokeImage: 'image4_url', pokeName: 'Pokemon 4' },
    { pokeImage: 'image5_url', pokeName: 'Pokemon 5' },
    { pokeImage: 'image6_url', pokeName: 'Pokemon 6' },
    { pokeImage: 'image7_url', pokeName: 'Pokemon 7' },
    { pokeImage: 'image8_url', pokeName: 'Pokemon 8' }
  ]);


  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clickedPokemon, setClickedPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  


  const getRandomPokemon = (data, count) => {
    const selectedPokemons = new Set();
  //ensures no duplicates 
  while (selectedPokemons.size < count) {
    const randomIndex = Math.floor(Math.random() * data.length);
    selectedPokemons.add(data[randomIndex]);
  }

  return Array.from(selectedPokemons);
  }


  const fetchPokemon = async () => {
    try {
      const promises = [];
      for (let id = 1; id <= 151; id++) {
        promises.push(fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(res => res.json()));
      }
      const results = await Promise.all(promises);
      return results ;
    } catch (error) {
      console.error("Error fetching Pokémon data:", error);
    } finally {
      setLoading(false);
    }
  };


  const randomList = async () => { 
    const results = await fetchPokemon();
  
    const selectedPokemons = getRandomPokemon(results, 5);
    
    return selectedPokemons
  }

  const formattedPokemon = async () => { 
    const formatted = await randomList();
    const formattedResults = formatted.map(pokemon => ({
      pokeImage: pokemon.sprites.front_default,
      pokeName: pokemon.name
    }))
    setPokemonData(formattedResults);
    return formattedResults
  }

  useEffect(() => {
    formattedPokemon();
  
  }, []);



  const handleClick = (e) => {
    const pokeName = e.currentTarget.value; // Use e.currentTarget for accurate reference
  
    if (clickedPokemon.includes(pokeName)) {
     
      alert('Game Over! You clicked the same Pokémon.');
      setScore(0);
      setClickedPokemon([]);
      formattedPokemon(); 
    } else {
  
      setClickedPokemon(prevClicked => [...prevClicked, pokeName]);
  
      setScore(prevScore => {
        const newScore = prevScore + 1;
  
        if (score + 1 > bestScore) {
          setBestScore(score + 1);
        }
      
        if (newScore === 5) {
          setTimeout(() => {
            alert('You win!');
            setScore(0);
            setClickedPokemon([]);
            formattedPokemon(); // Restart the game with new Pokémon
          }, 1000);
        }

        
  
        return newScore;
      });
  
      // Shuffle Pokémon after each click
      const shuffledPokemon = getRandomPokemon(pokemonData, pokemonData.length);
      setPokemonData(shuffledPokemon);
    }
  };
  






  if (loading) {
    return <div>Loading...</div>;
  }








  return (

    <div className="container">
      <Header score={score} bestScore={bestScore} />
      <main className="main-container">

        <div className="card-container">
          {pokemonData.map((pokemon, index) => (
            <button key={index} onClick={handleClick}  value={pokemon.pokeName} ><Card key={index} pokeImage={pokemon.pokeImage} pokeName={pokemon.pokeName} /></button>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
