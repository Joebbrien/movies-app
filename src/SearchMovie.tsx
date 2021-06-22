import React, {useState} from 'react';
import { Button, Form, FormControl } from 'react-bootstrap'

interface Props{
    fetchMovie: FetchMovie;
}

export const SearchMovie: React.FC<Props> =({fetchMovie})=>{
    const [query, setQuery]= useState('');
    return<div className="form-group">
        <form>
         <label>
             Search:
             <input 
                type="text"
                className="form-control"
                onChange={e=>{
                    setQuery(e.target.value);
                }}
             />
         </label>
         <Button 
            className="btn btn-primary"
            name="search"
            onClick={e=>{
                e.preventDefault();
                fetchMovie(query);
                setQuery('');
            }
            }
            >
            Search
            </Button>
        
        </form>
    </div>
}