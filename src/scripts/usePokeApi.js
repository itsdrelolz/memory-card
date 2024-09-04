import { useEffect, useState } from 'react'
import { getPokemon } from './pokemon'



export function usePokemonApi( {url, id} ) { 
    useEffect(() => { 
        return () => { 

        };
    }, [id, url])
} 


