import React from 'react';
import { useState, useEffect } from 'react';
import instance from '../Axios/axios';
import request from '../Axios/requests';
import "../CSS/banner.css"

function Banner() {
    const [movie, setmovie] = useState([]);
    
    useEffect(()=>{
        let mounted= true;
        if(mounted){
             async function fetchData(){
                const requests= await instance.get(request.fetchNetflixOrignals);
                setmovie(requests.data.results[Math.floor(Math.random()*( requests.data.results.length-1))])
             }
             fetchData()
        }
        return()=>{
            mounted=false;
        }
    },[])

    return (
        <header className='banner'
             style={{
                 backgroundSize:"cover",
                 backgroundPosition:"center top",
                 backgroundRepeat:"no-repeat",
                 backgroundImage:`url("https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}")`,
                 backgroundAttachment:"fixed",
             }}
        >
        <div className='banner_maincontainter'>
             <h1 className='banner_title'>{movie?.title || movie?.name || movie?.orignal_name}</h1>
             <div className="twobuttonContainer">
                 <button className="bannerButton">Play</button>
                 <button className="bannerButton">MyList</button>
             </div>
             <p className='movie_overview'>{movie?.overview}</p>
        </div>
        <div className="banner_bottom"></div>
        </header>
    )
}

export default Banner
