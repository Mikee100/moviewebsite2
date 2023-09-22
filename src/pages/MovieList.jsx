import React from 'react'
import movies from '../data/movies'

import "../styles/movielist.css";


export default function MovieList() {

    
  

  return (
    <div>
        <div className='container'>
        <div className="movies">
            {movies.map((movie) => (
              <div
                className="product"
                key={movie.id}
              >
                <img
                  className="movie-image"
                  src={movie.image}
                  alt={movie.image}
                />

                
              </div>
            ))}
          </div>
       
        </div>  
    </div>
  )
}
