import { useState } from 'react'

function usePokemon () { 
const [pokemons, setPokemons] = useState([]);
// 
const POSSIBLE_POKEMON = 151 // gen 1 pokemon only 
}


export async function getPokemon(id) { 
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const { name, sprites } = await res.json();
    const image = sprites["front_default"]
    return { name, image };
}


