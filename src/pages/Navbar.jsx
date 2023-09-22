import React from "react";
import "./navbar.css";
import { FaSearch } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Navbar() {
  // const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="nav">
      <h3>NETFLIX</h3>
      <ul>
        <Link to="./home" style={{ color: "white" }}>

          <li> Home </li>{" "}
        </Link>
        <li> Tv Shows </li>
       <Link to="./movielist" style={{ color: "white" }} ><li> Movies </li></Link> 

        <li> News & Popular </li>
       <Link to='./mylist' style={{ color: "white" }}><li> My List </li></Link> 
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

      {/*
        <div className='search'>
      
  {
    movies.filter((val) => {
      if(searchTerm == ""){
        return val;
      }else if(val.title.toLowerCase().includes(searchTerm.to())){
        return val;
      }
    }  )
  }

</div>
*/}
    </div>
  );
}
