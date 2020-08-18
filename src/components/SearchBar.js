import React, {useEffect, useState} from 'react';
import "../App.css";
import SearchResults from './SearchResults'


function SearchBar() {

  const API_KEY = "117c9ecefdf983f3f9a27997885ab5a1"

  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('.')

   /*this useEffect only runs when is being submitted */
  useEffect(() => {
    getMovies()
  }, [query])

  //fetching the movies
  const getMovies = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`);
    const data = await response.json();
    setMovies(data.results);
    console.log(data)
  } 

  //this constant is going to modify search state 
  const updateSearch = e => {
    setSearch(e.target.value)
  }

  //this constant runs when form is submitted
  const getSearch = e => {
    e.preventDefault()
    //query is going to equal to what the user has inputed
    setQuery(search)
  }

  return (
    <div>
      <form onSubmit={getSearch} className="search-form">
         <input className="search-bar" type="text" value={search} onChange={updateSearch} placeholder="Search For Movie's Info" />
         <button className="search-button" type="submit">Search</button>
      </form>
      {/* this is going to map through the database */}
      {movies.map(results =>(
       <SearchResults 
       title={results.original_title} 
       image={results.poster_path}
       overview={results.overview}
       release_date={results.release_date}
       vote_average={results.vote_average}
       />  
      ))}
    </div> 
  )
}

export default SearchBar
