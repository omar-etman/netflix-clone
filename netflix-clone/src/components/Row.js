import React, {useState, useEffect} from 'react';
import axios  from '../utils/axios';
import  '../Row.css';

const imgBaseURL = "https://image.tmdb.org/t/p/original/"

function Row({title, fetchUrl, isLargeRow}) {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl])

    return (
        <div className="row">
           <h2>{title}</h2>
           <div className="row__posters">
                {movies.map(movie => (
                    <img 
                        key={movie.id}
                        className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                        src={`${imgBaseURL}${isLargeRow ? movie.poster_path :movie.backdrop_path}`} alt={movie.name}
                    />
                ))}
           </div>
        </div>
    )
}

export default Row