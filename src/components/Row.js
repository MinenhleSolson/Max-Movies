import React, { useState, useEffect } from 'react';
import axios from '../axios';
import "../Row.css"
import YouTube from 'react-youtube'
import movieTrailer from 'movie-trailer' 


const baseUrl = "https://image.tmdb.org/t/p/original/"

function Row({title, fetchUrl }) {

    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("")

    //this will run once when the page loads
    useEffect(() => {
        async function fetchData() {  
            const request = await axios.get(fetchUrl)
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);
 

    const opts = {
        height: '390',
        width: '100%',
        
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };

      

    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl(""); 
        }else {
            movieTrailer(movie?.original_title || "")
            .then((url) => {
                //https://www.youtube.com/watch?v=t433PEQGErc
                const urlParams = new URLSearchParams( new URL(url).search);
                setTrailerUrl(urlParams.get("v")); 
            }).catch(error => console.log(error) );
        }
    }

    return (
        <div className="row">  
            <h1 className="title">{title}</h1>


            <div className="row_posters">

                {movies.map(movie => (
                    <img 
                    key={movie.id}
                    onClick={() => handleClick(movie)}
                    className="row_poster"
                     src={`${baseUrl}${movie.poster_path}`} alt={movie.name} 
                     />
                ))}
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts } className="trailer" /> }
        </div> 
    )
}

export default Row
