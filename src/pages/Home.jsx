import React, { useState, useEffect } from "react";
import "./home.css";
import { FaPlay } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaRegThumbsUp } from "react-icons/fa";
import { RiNetflixFill } from "react-icons/ri";
import "react-multi-carousel/lib/styles.css";
import movies from "../data/movies";
import Series from "../data/series";
import Teens from "../data/teens";

export default function Home() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  const [popupcontent, setpopupcontent] = useState([]);

  const changecontent = (teens) => {
    setpopupcontent([teens]);
    setModal(!modal);
  };







  const playvideocover = () => {
    useEffect(() => {
      const video = document.getElementById("video");
      video.play();
    }, []);
  };

  return (
    <div>
      <video
        controls
        width="100%"
        className="video_cover"
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

      <h2 className="movietitle">6 UNDERGROUND</h2>
      <p className="movieabout">
        This is a very sweet, interesting movie that every one should watch and
        appreciate since it has very good actors
      </p>

      <button className="btn_play" onClick={playvideocover}>
        {" "}
        <FaPlay className="faplay" /> <p>Play</p>{" "}
      </button>
      <button className="btn_moreinfo" onClick={changecontent}>
        {" "}
        <FaInfoCircle className="fainfo" /> <p>More Info</p>{" "}
      </button>

      <div className="container_home">
        <div className="movies_arrange">
          <h2> Action Movies </h2>

          <div className="movies" onClick={toggleModal}>
            {movies.map((movie) => (
              <div
                className="product"
                onClick={() => changecontent(movie)}
                key={movie.id}
              >
                <img
                  className="movie-image"
                  src={movie.image}
                  alt={movie.image}
                />

                <RiNetflixFill className="netflix_icons" />
              </div>
            ))}
          </div>
        </div>

        <div className="movies_arrange1">
          <h2> Comedy   Movies </h2>
          <div className="movies">
            {movies.map((movie) => (
              <div
                className="product"
                onClick={() => changecontent(movie)}
                key={movie.id}
              >
                <img
                  className="movie-image"
                  src={movie.image}
                  alt={movie.image}
                />
                <RiNetflixFill className="netflix_icons" />
              </div>
            ))}
          </div>
        </div>

        <div className="series_arrange">
          <h2>Series </h2>
          <div className="movies">
            {Series.map((series) => (
              <div
                className=""
                onClick={() => changecontent(series)}
                key={series.id}
              >
                <img
                  className="movie-image"
                  src={series.image}
                  alt={series.image}
                />
                <RiNetflixFill className="netflix_icons" />
              </div>
            ))}
          </div>
        </div>

        <div className="teens_arrange">
          <h2> Teens </h2>

          <div className="movies">
            {Teens.map((teens) => (
              <div
                className=""
                onClick={() => changecontent(teens)}
                key={teens.id}
              >
                <img
                  className="movie-image"
                  src={teens.image}
                  alt={teens.image}
                />
                <RiNetflixFill className="netflix_icons" />
              </div>
            ))}
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
                </div>
              );
            })}
          </div>
        )}







      </div>
    </div>
  );
}
