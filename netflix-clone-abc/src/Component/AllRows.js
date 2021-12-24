import React from 'react';
import { useState, useEffect, useRef } from 'react';
import instance from '../Axios/axios';
import "../CSS/row.css";
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";

const base_URL = "https://image.tmdb.org/t/p/w500"

function AllRows(props) {
    const elementRef = useRef(null);
    const  [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");
    const [arrowDisable, setArrowDisable] = useState(true);

    useEffect(()=>{
      let mounted= true;
         if(mounted){
              async function fetchData () {
                     const request = await instance.get(props.fetchURL);
                     setMovies(request.data.results);
                    //  console.log(request.data.results);
                     return request;
              }

              fetchData()
         }
      return()=>{
          mounted=false;
      }
    },[props.fetchURL]);

    // console.log(base_URL+movies[1].poster_path)
    const opts={
        height: "390",
        width:"100%",
        playerVars:{
            autoplay:1,
        }
    }
    
    const handleClick=(movie)=>{
        console.log("y")
        if(trailerUrl)
         setTrailerUrl("");
        else
        {
            movieTrailer(movie?.original_title || "" || movie?.name )
             .then(url=>{
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl( urlParams.get('v'));
             }).catch((err)=>console.log(err));
        }
    }

    const handleHorizantalScroll = (element, speed, distance, step) => {
        let scrollAmount = 0;
        const slideTimer = setInterval(() => {
          element.scrollLeft += step;
          scrollAmount += Math.abs(step);
          if (scrollAmount >= distance) {
            clearInterval(slideTimer);
          }
          if (element.scrollLeft === 0) {
            setArrowDisable(true);
          } else {
            setArrowDisable(false);
          }
        }, speed);
      };

    return (
        <div className='row_main_container'>
             <h3>{props.title}</h3> 
             
             <div className="row_poster" ref={elementRef}>
                 {movies!==[] &&
                     movies.map((movie)=>{
                         return(
                              <div className={`poster_container ${props.isLargeRow && "row_posterLarge"} `} key={movie.id} >
                                  <img src={`${base_URL}${props.isLargeRow ? movie?.backdrop_path:  movie.poster_path }`} alt={`${movie.original_title}`} onClick={()=>handleClick(movie)} />
                                  
                              </div>
                         )
                      }
                    )
                 }
                 
             </div>
             {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} className='youtube'/>}
             <div className="navigationbuttons">
             <button className='buttonLeft' onClick={() => {handleHorizantalScroll(elementRef.current, 25, 100, -150);}} disabled={arrowDisable} ><BsChevronLeft/></button>
             <button className='buttonRight' onClick={() => {handleHorizantalScroll(elementRef.current, 25, 100, 150);}}><BsChevronRight/></button>
             </div>
        </div>
        
    )
}

export default AllRows;