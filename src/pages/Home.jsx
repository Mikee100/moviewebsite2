import React, { useState } from 'react';
import './home.css'
import {FaPlay} from 'react-icons/fa'
import {FaInfoCircle} from 'react-icons/fa'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


export default function Home() {

  const movies = [
  {
  id:1,
  title:"London Has Fallen",
  image:"/images/action1.webp",
  about:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit architecto nulla autem libero temporibus facilis porro assumenda" 
  },


{
    id:2,
    title:"Movie 2",
    image:"/images/action2.webp",
    about:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit architecto nulla autem libero temporibus facilis porro assumenda" 
    },  
   
{
      id:3,
      title:"Movie 3",
      image:"/images/action3.webp",
      about:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit architecto nulla autem libero temporibus facilis porro assumenda" 
      },

      {
        id:4,
        title:"Movie 4",
        image:"/images/action4.webp",
        about:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit architecto nulla autem libero temporibus facilis porro assumenda" 
        },

        {
          id:5,
          title:"Movie 5",
          image:"/images/action5.webp",
          about:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit architecto nulla autem libero temporibus facilis porro assumenda "
          },
          
      {
        id:4,
        title:"Movie 4",
        image:"/images/action6.webp",
        about:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit architecto nulla autem libero temporibus facilis porro assumenda" 
        },

        {
          id:5,
          title:"Movie 5",
          image:"/images/action8.webp",
          about:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit architecto nulla autem libero temporibus facilis porro assumenda "
          },




];
const Series = [
  {
  id:1,
  title:"Movie 1",
  image:"/images/series1.webp",
  about:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit architecto nulla autem libero temporibus facilis porro assumenda" 
  },


{
    id:2,
    title:"Movie 2",
    image:"/images/series2.webp",
    about:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit architecto nulla autem libero temporibus facilis porro assumenda" 
    },  
   
{
      id:3,
      title:"Movie 3",
      image:"/images/series3.webp",
      about:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit architecto nulla autem libero temporibus facilis porro assumenda" 
      },

      {
        id:4,
        title:"Movie 4",
        image:"/images/series4.webp",
        about:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit architecto nulla autem libero temporibus facilis porro assumenda" 
        },

        {
          id:5,
          title:"Movie 5",
          image:"/images/series6.webp",
          about:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit architecto nulla autem libero temporibus facilis porro assumenda "
          },
          
      {
        id:4,
        title:"Movie 4",
        image:"/images/series7.webp",
        about:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit architecto nulla autem libero temporibus facilis porro assumenda" 
        },

        {
          id:5,
          title:"Movie 5",
          image:"/images/series1.webp",
          about:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit architecto nulla autem libero temporibus facilis porro assumenda "
          },




];

const Teens = [
  {
  id:1,
  title:"Movie 1",
  image:"/images/teen.webp",
  about:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit architecto nulla autem libero temporibus facilis porro assumenda" 
  },


{
    id:2,
    title:"Movie 2",
    image:"/images/teen2.webp",
    about:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit architecto nulla autem libero temporibus facilis porro assumenda" 
    },  
   
{
      id:3,
      title:"Movie 3",
      image:"/images/teen5.webp",
      about:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit architecto nulla autem libero temporibus facilis porro assumenda" 
      },

      {
        id:4,
        title:"Movie 4",
        image:"/images/teen7.webp",
        about:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit architecto nulla autem libero temporibus facilis porro assumenda" 
        },

        {
          id:5,
          title:"Movie 5",
          image:"/images/thumbbig-1325035.webp",
          about:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit architecto nulla autem libero temporibus facilis porro assumenda "
          },
          
      {
        id:4,
        title:"Movie 4",
        image:"/images/series7.webp",
        about:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit architecto nulla autem libero temporibus facilis porro assumenda" 
        },

        {
          id:5,
          title:"Movie 5",
          image:"/images/series1.webp",
          about:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit architecto nulla autem libero temporibus facilis porro assumenda "
          },




];

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};



  return (

    <div >

    
            <img src='\images\6-Underground-2.jpg' alt='' className='img_cover'  />
            <h2 className='movietitle' >6 UNDERGROUND</h2>
            <p className='movieabout' >This is a very sweet, interesting movie that every one should watch and appreciate since it has very good actors</p>


            <button className='btn_play' > < FaPlay className='faplay'  /> <p>Play</p> </button>
            <button className='btn_moreinfo' > <FaInfoCircle className='fainfo'  />  <p>More Info</p>  </button>


<div className='container_home' >

  <div className='movies_arrange'  >  
  
<h2> Action Movies </h2>

  <div className='movies'>

  
{movies.map((movie) => (
 
  <div className="product"
   key={movie.id}>

    <img  
      className="movie-image"
      src={movie.image}
      alt={movie.image}
      
    />
   

  </div>
  
    ))}


</div> 


</div>





<div className='movies_arrange1'>  
<h2> Comedy Movies </h2>
<div className='movies'>


{movies.map((movie) => (

<div className="product"
 key={movie.id}>

  <img  
    className="movie-image"
    src={movie.image}
    alt={movie.image}
    
  />
 

</div>

  ))}



</div> 

</div>



<div className='series_arrange'>  
<h2>Series </h2>
  <div className='movies'>

  
{Series.map((series) => (
 
  <div className=""
   key={series.id}>

    <img  
      className="movie-image"
      src={series.image}
      alt={series.image}
      
    />
   

  </div>
  
    ))}



</div> 

</div>





 
<div className='teens_arrange'>  
<h2> Teens </h2>

<div className='movies'>


{Teens.map((teens) => (

<div className=""
 key={teens.id}>

  <img  
    className="movie-image"
    src={teens.image}
    alt={teens.image}
    
  />
 

</div>

  ))}



</div> 
  

</div>








  </div>

</div>

  )
}
