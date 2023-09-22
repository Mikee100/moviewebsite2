import React, {useState} from "react";
import movies from "../data/movies";
import { FaPlay } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";

import "../styles/movielist.css";
import { FaInfoCircle } from "react-icons/fa";

const getMovieById = (id) => {
  return movies.find((movie) => movie.id === id);
};
export default function MovieList() {
  const movies = getMovieById(2);

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };


  return (
    <div>
      <div className="container">
        
        
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
        <h2 className="movie_genre" >Movies</h2>
        <div className="subgenre" >
    

            <p>Genres < IoMdArrowDropdown className="fa_down" />
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
      </div>
    </div>
  );
}
