import React from 'react'
import { useEffect, useState } from "react";
import axiosInstance from './axiosinstance'
import {useHistory} from "react-router-dom";
export default function Movies() { 
    const [movies, setMovies] = useState([]);
    const source="https://image.tmdb.org/t/p/w500"
    const history = useHistory();
    useEffect(() => {
        axiosInstance
          .get("/movie/popular?api_key=125f20745f4030a31d2a4c7ed086d694")
          .then((res) => {
              console.log(res.data.results[0].poster_path)
              setMovies(res.data.results)})
          .catch((err) => console.log(err));
      }, []);
      const redirectToDetails = (id) => {
        history.push(`/details/${id}`)
      }
      const redirectTopage2 = () => {
        history.push(`/${2}`)
      }
      const redirectTopage3 = () => {
        history.push(`/${3}`)
      }
    return (
        <div className="container">
             <div className="row m-3">
            <div className='col-6'>
         <button className="bg-success"  onClick={() => redirectTopage2()}>page2</button>
         </div>
         <div className='col-6'>
         <button className="bg-success"  onClick={() => redirectTopage3()}>page 3</button>
         </div>
         </div>
            <div className='row m-2'>
               
       {movies.map((movie) => {
          return ( <div className="col-4">
          <div className="card">
          <img src ={`${source}/${movie.poster_path}`} class="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{movie.title}</h5>
        <p className="card-text">{movie.overview}</p>
        <button className="bg-warning"  onClick={() => redirectToDetails(movie.id)}>view details</button>
        </div>
    </div>
    </div>
          )
        })}
       
        </div>
        </div>
    )
}
