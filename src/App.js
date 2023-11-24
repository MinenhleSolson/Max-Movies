import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import Row from './components/Row';
import requests from './requests';
 


function App() {
  return (
    <div className="App">
        <Navbar />
        <SearchBar />
   
       {/*the rows below will request for posters in the API */}
        <Row title="Popular Movies" fetchUrl={requests.fetchPopularMovies} />
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
        <Row title="Upcoming Movies" fetchUrl={requests.fetchUcomingMovies} />
        <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
        <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
        <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
        <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
       
    </div>
  );
}

export default App;
