import React from 'react';
import {Card, Button } from 'react-bootstrap'

interface Props{
    movie: IMovie;
    showDetails: MovieDetails
}

export const CardMovie: React.FC<Props> =({movie, showDetails})=>{
    let imageUrl = "http://image.tmdb.org/t/p/w185"+movie.poster_path;
    return<div className="card">
       <div className= "card-body">
       <img src={imageUrl} alt="Image" className="float-right"/>
       <h4 className="card-title">{movie.title}</h4>
       <p className="card-text">{movie.overview}</p>
       <Button
         className="btn btn-primary"
         onClick={(e)=>{
           e.preventDefault();
           showDetails(movie.id);
       }}
       >view details</Button>
       </div>
     </div>
}