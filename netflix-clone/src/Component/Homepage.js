import React from 'react';
import AllRows from './AllRows';
import request from '../Axios/requests';
import Banner from './Banner';

function Homepage() {
    // console.log(request)
    return (
        <div className='HomepageMainContainer'>
            <Banner/>
            <AllRows title="NETFLIX ORIGNALS" fetchURL={request.fetchNetflixOrignals} />
            <AllRows title="Trending Now" fetchURL={request.fetchTrending} isLargeRow={true}/>
            <AllRows title="Top Rated" fetchURL={request.fetchTopRated} isLargeRow={true}/>
            <AllRows title="Action Movies" fetchURL={request.fetchActionMovies} isLargeRow={true}/>
            <AllRows title="Comedy Movies" fetchURL={request.fetchComedyMovies} isLargeRow={true}/>
            <AllRows title="Romantic Movies" fetchURL={request.fetchRomanticMovies} isLargeRow={true}/>
            <AllRows title="Horror Movies" fetchURL={request.fetchHorrorMovies} isLargeRow={true}/>
            <AllRows title="Documentaries" fetchURL={request.fetchDocumentaries} />
        </div>
    )
}

export default Homepage
