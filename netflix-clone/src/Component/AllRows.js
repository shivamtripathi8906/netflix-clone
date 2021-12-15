import React from 'react';
import { useState, useEffect } from 'react';
import instance from '../Axios/axios';
import "../CSS/row.css";

const base_URL = "https://image.tmdb.org/t/p/w500"

function AllRows(props) {
    const  [movies, setMovies] = useState([]);

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

    return (
        <div className='row_main_container'>
             <h3>{props.title}</h3> 
             
             <div className="row_poster">
                 {movies!==[] &&
                     movies.map((movie)=>{
                         return(
                              <div className={`poster_container ${props.isLargeRow && "row_posterLarge"} `} key={movie.id}>
                                  <img src={`${base_URL}${props.isLargeRow ? movie?.backdrop_path:  movie.poster_path }`} alt={`${movie.original_title}`} />
                              </div>
                         )
                      }
                    )
                 }
             </div>
        </div>
    )
}

export default AllRows;