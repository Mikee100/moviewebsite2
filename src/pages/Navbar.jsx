import React from 'react'
import "./navbar.css"
import {FaSearch} from 'react-icons/fa'
import {FaRegBell} from 'react-icons/fa'
import { Link } from 'react-router-dom'
export default function Navbar() {

  

  return (
    <div className='nav' >
     <h3>NETFLIX</h3>
        <ul>
          <Link  to='./home' style={{color:'white'}}  > <li> Home </li> </Link>  
            <li> Tv Shows </li>
            <li> Movies </li>
            <li> News & Popular  </li>
            <li> My List </li>
            <li> Browse by Languages </li>
            
            
            </ul>    
            <div className='searchengine' >
            <input type='text'  placeholder='            Titles,People,Genre' className='searchbox'  />

            <a href='#' >
        <FaSearch   className='searchfa' />
        </a>
</div>

        <FaRegBell  className='bellfa'  />


        </div>
  )
}
