import React, {useState, useEffect} from 'react'
import axios  from '../utils/axios';
import requests from '../utils/requests';

const imgBaseURL = "https://image.tmdb.org/t/p/original/"
function Banner() {

    const [movie, setMovie] = useState([])

    useEffect(()=> {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length-1)
                ]
            );
            return request
        }
        fetchData();
    },[]);
    console.log(movie)
    return (
        <header className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url(${imgBaseURL}${movie?.backdrop_path})`,
                backgroundPosition: "center center"
            }}
        > 
            <div className="banner__contents">
                <h1>{movie?.name || movie?.original_name || movie.title}</h1>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>
                <h1 className="banner__description">{movie?.overview}</h1>
            </div>
        </header>
    )
}

export default Banner
