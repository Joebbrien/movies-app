import React, {useState, useEffect} from 'react';
import {getMovieById} from './API';
import { Button } from 'react-bootstrap'

interface Props{
    movieId:number
}

export const DisplayMovie: React.FC<Props> =({movieId})=>{
    const [movie, setMovieDetails]= useState<IMoveDetails>();
    const [imageUrl, setImageUrl]= useState("");
    const imageBaseUrl = "http://image.tmdb.org/t/p/w342";
    useEffect(() => {
        fetchMovies()
      }, [])
      
      const fetchMovies = (): void => {
        getMovieById(movieId)
        .then(((data)=>{
            setMovieDetails(data.data)
            setImageUrl(imageBaseUrl+data.data.poster_path);
        }))
        .catch((err: Error) => console.log(err))
      }
    const _refreshPage =()=>{
        window.location.reload();
    }
    return<div>
       <img src={imageUrl} alt="Image" />
       <h2>{movie?.title}</h2>
       <p>{movie?.release_date}</p>
       <p>{movie?.original_language}</p>
       <p>{movie?.overview}</p>
       <p>{movie?.homepage}</p>
       <Button
       className="btn"
        onClick={e=>{
           e.preventDefault();
           _refreshPage();
       }}
       >Back</Button>
     
    </div>
}