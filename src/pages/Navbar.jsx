import React from "react";
import "./navbar.css";
import { FaSearch } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa";
import { Link } from "react-router-dom";
import movies from "../data/movies";

export default function Navbar() {
  // const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="nav">
      <h3>NETFLIX</h3>
      <ul>
        <Link to="./home" style={{ color: "white" }}>

          <li> Home </li>{" "}
        </Link>
        <Link to='./serieslist' style={{ color: "white" }}><li> Tv Shows </li></Link>
       <Link to="./movielist" style={{ color: "white" }} ><li> Movies </li></Link> 

        <li> News & Popular </li>
     <li> My List </li>
        <li> Browse by Languages </li>
      </ul>
      <div className="searchengine">
        <input
          type="text"
          placeholder="            Titles,People,Genre"
          className="searchbox"
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />

        <a href="#">
          <FaSearch className="searchfa" />
        </a>
      </div>

      <FaRegBell className="bellfa" />

    {/**
        <div className='search'>
      
        {movies.movies
          // eslint-disable-next-line
          .filter((movie) => {
            if (
              movie.title.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return movie;
            }
          })
          .map((movie) => (
            <div className="product" key={movie.id}>
              <img
                className="product-image"
                src={movie.image}
                alt={movie.image}
              />
              <h4 className="product-title">{movie.title}</h4>
            </div>
          )) 
           }





</div>
 */}

    </div>
  );
        }
