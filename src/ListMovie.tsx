import React from 'react';
import {CardMovie} from './Card';

interface Props{
    movies: IMovie[];
    showDetails: MovieDetails
}

export const ListMovies: React.FC<Props> =({movies, showDetails})=>{
    return<div>
        {movies.map( movie => {
         return   <CardMovie  movie={movie} showDetails={showDetails}/>
     })
   }
</div>
}