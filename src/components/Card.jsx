import { useEffect, useState } from 'react'



function Card( {pokeImage, pokeName} ) { 


    
    
    return ( 
        <>
        <div className="card">
            <div className="img-container">
            <img src={pokeImage} alt="A Pokemon Image" />
            </div>
            <div className="character-name">
              <h1>{pokeName}</h1>
            </div>
        </div>
        </>
    )
}

export default Card