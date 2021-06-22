import React, { useState, useEffect } from 'react';
import { SearchMovie } from './SearchMovie';
import { DisplayMovie } from './DisplayMovie';
import { ListMovies } from './ListMovie';
import { getMovies, searchMovie } from './API';

const initalMovie: IMovie= {
  adult: false,
  backdrop_path: "/path/to/cover",
  genre_ids: [23,45,66],
  id: 19404,
  original_language: "en",
  original_title: "Sharlock Holmes",
  overview: "Detective and mischief",
  popularity: 68.9,
  poster_path: "path/to cover",
  release_date: "2006-06-12",
  title: "Sharlock Holms",
  video: true,
  vote_average: 23,
  vote_count: 100
}


function App() {
  const [movies,setMovies] = useState<IMovie[]>([]);
  const [movieId, setMovieId]= useState<number>(0)
  const [active, setActive]= useState("2");

  useEffect(() => {
    fetchMovies()
  }, [])
  
  const fetchMovies = (): void => {
    getMovies()
    .then(((data)=>{setMovies(data.data.results)}))
    .catch((err: Error) => console.log(err))
  }

  const fetchMovie: FetchMovie= (text: string)=>{
    searchMovie(text)
    .then(((data)=>{setMovies(data.data.results)}))
    .catch((err: Error) => console.log(err))
  }

  const movieDetails: MovieDetails=(movieId:number)=>{
    console.log("Details: ", movieId);
    setMovieId(movieId);
    setActive("1");
  }
  return<div>
    {active === "2" && <SearchMovie fetchMovie={fetchMovie}/>}
    {active === "1" && <DisplayMovie movieId={movieId}/>}
    {active === "2" &&  <ListMovies movies={movies} showDetails={movieDetails}/>}
  </div>;
}

export default App;
