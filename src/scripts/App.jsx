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

    const [loading, setLoading] = useState(true);
    

  

    useEffect(() => {
      const fetchPokemon = async () => {
          try {
              const promises = [];
              for (let id = 1; id <= 151; id++) {
                  promises.push(fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(res => res.json()));
              }
              const results = await Promise.all(promises);


              const getRandomPokemon = (data, count) => { 
                const shuffled = data.sort(() => .5 - Math.random());
                return shuffled.slice(0, count);
              }

              

              const selectedPokemons = getRandomPokemon(results, 5);

             
              
              const formattedResults = selectedPokemons.map(pokemon => ({
                  pokeImage: pokemon.sprites.front_default,
                  pokeName: pokemon.name
              }));
              



              setPokemonData(formattedResults);
              console.log(formattedResults)
              return {formattedResults};
          } catch (error) {
              console.error("Error fetching Pokémon data:", error);
          } finally {
              setLoading(false); 
          }
      };




      
      fetchPokemon();
      return 
  }, []);

  






  
  
  if (loading) {
    return <div>Loading...</div>; 
}
  

  return (
    
    <div className="container">
      <Header score={score} bestScore={bestScore}/>
      <main className="main-container">
        
          <div className="card-container">
          {pokemonData.map((pokemon, index) => (
            <button key={index}><Card key={index} pokeImage={pokemon.pokeImage} pokeName={pokemon.pokeName}  /></button>
          ))}
            </div>

      </main>
    </div>
  );
}

export default App;
