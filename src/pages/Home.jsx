import React, { useState } from 'react';
import './home.css'
import {FaPlay} from 'react-icons/fa'
import {FaInfoCircle} from 'react-icons/fa'
import {FaTimes} from 'react-icons/fa'
import {FaPlus} from 'react-icons/fa'
import {FaRegThumbsUp} from 'react-icons/fa'

import 'react-multi-carousel/lib/styles.css';


export default function Home() {


 
  const movies = [
  {
  id:1,
  title:"London Has Fallen",
  image:"/images/action1.webp",
  about:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit architecto nulla autem libero temporibus facilis porro assumenda" ,
  year: 2017,
  
  
  },


{
    id:2,
    title:"Movie 2",
    image:"/images/action2.webp",
    about:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit architecto nulla autem libero temporibus facilis porro assumenda" ,
    year: 2017,
  

    },  
   
{
      id:3,
      title:"Movie 3",
      image:"/images/action3.webp",
      about:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit architecto nulla autem libero temporibus facilis porro assumenda"  ,
      year: 2017,
    
      },

      {
        id:4,
        title:"Movie 4",
        image:"/images/action4.webp",
        about:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit architecto nulla autem libero temporibus facilis porro assumenda"  ,
        year: 2017,
      
        },

        {
          id:5,
          title:"Movie 5",
          image:"/images/action5.webp",
          about:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit architecto nulla autem libero temporibus facilis porro assumenda " ,
          year: 2017,
        
          },
          
      {
        id:4,
        title:"Movie 4",
        image:"/images/action6.webp",
        about:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit architecto nulla autem libero temporibus facilis porro assumenda"  ,
        year: 2017,
      
        },

        {
          id:5,
          title:"Movie 5",
          image:"/images/action8.webp",
          about:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit architecto nulla autem libero temporibus facilis porro assumenda " ,
          year: 2017,
        
          },




];
const Series = [
  {
  id:1,
  title:"Movie 1",
  image:"/images/series1.webp",
  about:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit architecto nulla autem libero temporibus facilis porro assumenda"  ,
  year: 2017,

  },


{
    id:2,
    title:"Movie 2",
    image:"/images/series2.webp",
    about:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit architecto nulla autem libero temporibus facilis porro assumenda" ,
    year: 2017,
  
    },  
   
{
      id:3,
      title:"Movie 3",
      image:"/images/series3.webp",
      about:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit architecto nulla autem libero temporibus facilis porro assumenda"  ,
      year: 2017,
    
      },

      {
        id:4,
        title:"Movie 4",
        image:"/images/series4.webp",
        about:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit architecto nulla autem libero temporibus facilis porro assumenda" ,
        year: 2017,
       
        },

        {
          id:5,
          title:"Movie 5",
          image:"/images/series6.webp",
          about:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit architecto nulla autem libero temporibus facilis porro assumenda ",
          year: 2017,
         
          },
          
      {
        id:4,
        title:"Movie 4",
        image:"/images/series7.webp",
        about:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit architecto nulla autem libero temporibus facilis porro assumenda" ,
        year: 2017,
       
        },

        {
          id:5,
          title:"Movie 5",
          image:"/images/series1.webp",
          about:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit architecto nulla autem libero temporibus facilis porro assumenda ",
          year: 2017,
         
          },




];

const Teens = [
  {
  id:1,
  title:"Movie 1",
  image:"/images/teen.webp",
  about:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit architecto nulla autem libero temporibus facilis porro assumenda" ,
  year: 2017,
 
  },


{
    id:2,
    title:"Movie 2",
    image:"/images/teen2.webp",
    about:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit architecto nulla autem libero temporibus facilis porro assumenda" ,
    year: 2017,
   
    },  
   
{
      id:3,
      title:"Movie 3",
      image:"/images/teen5.webp",
      about:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit architecto nulla autem libero temporibus facilis porro assumenda" ,
      year: 2017,
     
      },

      {
        id:4,
        title:"Movie 4",
        image:"/images/teen7.webp",
        about:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit architecto nulla autem libero temporibus facilis porro assumenda" ,
        year: 2017,
       
        },

        {
          id:5,
          title:"Movie 5",
          image:"/images/thumbbig-1325035.webp",
          about:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit architecto nulla autem libero temporibus facilis porro assumenda ",
          year: 2017,
         
          },
          
      {
        id:4,
        title:"Movie 4",
        image:"/images/series7.webp",
        about:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit architecto nulla autem libero temporibus facilis porro assumenda" ,
        year: 2017,
       
        },

        {
          id:5,
          title:"Movie 5",
          image:"/images/series1.webp",
          about:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit architecto nulla autem libero temporibus facilis porro assumenda ",
          year: 2017,
         
          },




];




const  [modal, setModal] = useState(false);

const toggleModal = () =>{

  setModal(!modal)


}

const [popupcontent, setpopupcontent] = useState([]);

const changecontent = (teens) =>{
  setpopupcontent([teens]);
  setModal(!modal);

}


  return (

    <div >

    
            <img src='\images\6-Underground-2.jpg' alt='' className='img_cover'  />
            <h2 className='movietitle' >6 UNDERGROUND</h2>
            <p className='movieabout' >This is a very sweet, interesting movie that every one should watch and appreciate since it has very good actors</p>


            <button className='btn_play' > < FaPlay className='faplay'  /> <p>Play</p> </button>
            <button className='btn_moreinfo' > <FaInfoCircle className='fainfo'  />  <p>More Info</p>  </button>


<div className='container_home'   >

  <div className='movies_arrange'  >  
  
<h2> Action Movies </h2>

  <div className='movies'  onClick={toggleModal} >

  
{movies.map((movie) => (
 
  <div className="product" onClick={ () => changecontent(movie)}
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

<div className='movies_arrange1' >  
<h2> Comedy Movies </h2>
<div className='movies' >


{movies.map((movie) => (

<div className="product" onClick={ () => changecontent(movie)}
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
  <div className='movies'  >

  
{Series.map((series) => (
 
  <div className="" onClick={ () => changecontent(series)}
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

<div className='movies'   >


{Teens.map((teens) => (

<div className=""   onClick={ () => changecontent(teens)}
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






{ modal &&  (
  <div className='modal'  onClick={toggleModal} >

    
{popupcontent.map((pop) => {
return(
  <div className="popup_movie"
 key={pop.id}>

  <img  
    className="movie-image_popup" 
    src={pop.image}
    alt={pop.image}
    
  />
  <p className='pop_title' >{pop.title }</p>
  <p className='pop_about' >{pop.about}</p>
  <p className='pop_year'  >{pop.year}</p>
  <button className='pop_btn_play' > < FaPlay className='faplay'  /> <p>Play</p> </button>
 <FaPlus  className='addtolist' />
 <FaRegThumbsUp className='thumbsup' />
 <button onClick={changecontent} className='cross'  ><FaTimes/></button>

</div>
)


}
  



  )}
    
    </div> 

) 



}
 </div>









  </div>



  )
}
