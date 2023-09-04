import React from 'react'
import './home.css'
import {FaPlay} from 'react-icons/fa'
import {FaInfoCircle} from 'react-icons/fa'
export default function Home() {
const movies = [
  {
  id:1,
  title:"London Has Fallen",
  image:"/images/d83b5353d21d94c0ab7a3427f20d6a0a.jpg",
  about:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit architecto nulla autem libero temporibus facilis porro assumenda" 
  },


{
    id:2,
    title:"Movie 2",
    image:"/images/download (1).jfif",
    about:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit architecto nulla autem libero temporibus facilis porro assumenda" 
    },  
   
{
      id:3,
      title:"Movie 3",
      image:"images/download.jfif",
      about:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit architecto nulla autem libero temporibus facilis porro assumenda" 
      },

      {
        id:4,
        title:"Movie 4",
        image:"/images/OIP (2).jfif",
        about:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit architecto nulla autem libero temporibus facilis porro assumenda" 
        },

        {
          id:5,
          title:"Movie 5",
          image:"/images/OIP (1).jfif",
          about:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit architecto nulla autem libero temporibus facilis porro assumenda "
          },


];


  return (

    
    <div >
     
            <img src='\images\6-Underground-2.jpg' alt='' className='img_cover'  />
            <h2 className='movietitle' >6 UNDERGROUND</h2>
            <p className='movieabout' >This is a very sweet, interesting movie that every one should watch and appreciate since it has very good actors</p>


            <button className='btn_play' > < FaPlay className='faplay'  /> <p>Play</p> </button>
            <button className='btn_moreinfo' > <FaInfoCircle className='fainfo'  />  <p>More Info</p>  </button>


<div className='container_home' >
  <div className='movies_arrange'>  
  <div className='movies'>

  
{movies.map((movie) => (
 
  <div className="product"
   key={movie.id}>

    <img  
      className="movie-image"
      src={movie.image}
      alt={movie.image}
      
    />
    <h4 className="movie-title" >
      {movie.title}

    </h4>
  

  </div>
  
    ))}



</div> 
</div>
  </div>

</div>

  )
}
