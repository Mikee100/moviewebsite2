import React, { useState } from "react";
import movies from "../data/movies";
import { FaPlay } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import "./home.css"
import "../styles/movielist.css";
import { FaInfoCircle } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { FaRegThumbsUp } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

//const getMovieById = (id) => {
//return movies.find((action) => action.id === id);
//  };

export default function MovieList() {
  //const movies = getMovieById(2);

  const [modal, setModal] = useState(false);


  const [modal1, setModal1] = useState(false);
  const [popupcontent, setpopupcontent] = useState([]);

  const changecontent = (teens) => {
    setpopupcontent([teens]);
    setModal(!modal);
  };

  const toggleModal = () => {
    setModal(!modal);
  };

  const toggleModal1 = () => {
    setModal1(!modal1);
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
        <div className="subgenre" onClick={toggleModal1}>
          {modal1 && (
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
        <button className="list_btn_moreinfo" >
          {" "}
          <FaInfoCircle className="list_fainfo" /> <p>More Info</p>{" "}
        </button>

        <div className="movie_container">
          <h2>Popular on Netflix</h2>
          <div className="list_movie_arrange">
            {movies.map((movie) => (
              <div className="list_movies" key={movie.id}
              onClick={() => changecontent(movie)}
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

        <div className="action_container">
          <div className="action_arrange">
            <h2>Top 10 Movies in Kenya </h2>
            {movies.map((movie) => (
              <div className="list_movies" key={movie.id}
              onClick={() => changecontent(movie)}
              >
                <img
                  className="movie-image"
                  src={movie.image}
                  alt={movie.image}
                ></img>
              </div>
            ))}
          </div>
        </div>
      </div>

      
      {modal && (
          <div className="modal" onClick={toggleModal}>
            {popupcontent.map((pop) => {
              return (
                <div className="popup_movie" key={pop.id}>
                  <video
                    controls
                    width="100%"
                    id="video"
                    className="pop_video"
                    autoPlay
                    muted
                  >
                    <source src={pop.video} type="video/mp4" />
                    Sorry, your browser doesn't support embedded videos.
                  </video>

                  <p className="pop_title">{pop.title}</p>
                  <p className="pop_about">{pop.about}</p>
                  <p className="pop_year">{pop.year}</p>
                  <p className="pop_cast">
                    {" "}
                    <p>Cast:</p> {pop.cast}
                  </p>
                  <p className="pop_genre">
                    {" "}
                    <p>Genre:</p> {pop.genre}
                  </p>

                  <p className="watchnow">Watch the Movie</p>
                  <button className="pop_btn_play" onClick={pop.video}>
                    {" "}
                    <FaPlay className="faplay" /> <p>Play</p>{" "}
                  </button>
                  <FaPlus className="addtolist" />
                  <FaRegThumbsUp className="thumbsup" />
                  <button onClick={changecontent} className="cross">
                    <FaTimes />
                  </button>

{/***************setting up the episodes and series component***************** */   }
                
                <p className="episode_name">Episodes</p>
                <div className="season_name">
                  <p  >Season</p>
                </div>

                </div>
              );
            })}
          </div>
        )}

    </div>
  );
}
