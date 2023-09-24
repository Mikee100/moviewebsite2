import React, { useState } from "react";
import movies from "../data/movies";
import { FaPlay } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";

import "../styles/movielist.css";
import { FaInfoCircle } from "react-icons/fa";

//const getMovieById = (id) => {
    //return movies.find((action) => action.id === id);
//  };
  

export default function MovieList() {
  
  //const movies = getMovieById(2);

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div>
      <div className="container_movies">
        {movies ? (
          <div>
            <video
              controls
              width="100%"
              className="video_cover_movie"
              id="video"
              autoPlay
              muted
            >
              <source
                src="/images/6 Underground starring Ryan Reynolds _ Official Trailer _ Netflix.mp4"
                type="video/mp4"
              />
              Sorry, your browser doesn't support embedded videos.
            </video>

            <h2 className="movielist_title">{movies.title}</h2>
            <h2 className="movielist_about"> {movies.about}</h2>
          </div>
        ) : (
          <p>Movie not found</p>
        )}
        <h2 className="movie_genre">Movies</h2>
        <div className="subgenre" onClick={toggleModal}>
          {modal && (
            <section>
              <option>Action</option>
              <option>Comedy</option>
              <option>Drama</option>
              <option>Thriller</option>
              <option>Action</option>
              <option>Comedy</option>
              <option>Drama</option>
              <option>Thriller</option>
              <option>Action</option>
              <option>Comedy</option>
              <option>Drama</option>
              <option>Thriller</option>
              <option>Action</option>
              <option>Comedy</option>
              <option>Drama</option>
            </section>
          )}

          <p>
            Genres <IoMdArrowDropdown className="fa_down" />
          </p>
        </div>

        <button className="list_btn_play">
          {" "}
          <FaPlay className="list_faplay" /> <p>Play</p>{" "}
        </button>
        <button className="list_btn_moreinfo">
          {" "}
          <FaInfoCircle className="list_fainfo" /> <p>More Info</p>{" "}
        </button>


        <div className="movie_container" >
          <h2>Popular on Netflix</h2>
         <div className="list_movie_arrange" > 
         {movies.map((movie) => (
              <div
                className="list_movies"
              
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

         <div className="action_container" >
         <div className="action_arrange" > 
         <h2>Action Movies </h2>
         {movies.map((movie) => (
              <div
                className="list_movies"
              
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

         <div className="series_container" >
         <div className="action_arrange" > 
         <h2>Action Movies </h2>
         {movies.map((movie) => (
              <div
                className="list_movies"
              
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

    </div>
  );
}
