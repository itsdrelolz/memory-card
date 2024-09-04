import { useEffect, useState } from 'react'


const POSSIBLE_POKEMON = 152 


export const Pokemon = () => {

   const [pokeCards, setPokeCards] = useState(null);



   useEffect(() => { 
      fetch('https://pokeapi.co/api/v2/pokemon/12')
      .then(res => {
         return res.json();
      })
      .then(data => {
         const {name, sprites} = data;
         const image = sprites["front_default"]
         console.log(`Name  :${name} Image: ${image}`)
         return {name, image}
         
      });
   }, []);
}

 
 


export const getPokemon = async ({ url, id } ) => { 
   try {
   const res = await fetch(`${url}/${id}`)
   const { name, sprites } = await res.json();
   const image = sprites["front_default"]
   return { name, image };
   }
   catch(err) {
      console.log(`Error retrieving pokemon ${err}`)
      return 
   }

}


//implement unqiue getting 10 unique ids for the pokemon 























