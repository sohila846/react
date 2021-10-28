import React from 'react'
import axiosInstance from './axiosinstance'
import { useEffect, useState } from "react";
import {useParams } from 'react-router';
import {useHistory} from "react-router-dom";
export default function Page3() {
    const history = useHistory();
    const [movies, setMovies] = useState([]);
    const params = useParams();
    const source="https://image.tmdb.org/t/p/w500"
    console.log(params)
    useEffect(() => {
        axiosInstance
          .get(`/movie/popular?api_key=125f20745f4030a31d2a4c7ed086d694&page=${params.page}`)
          .then((res) => {
              console.log(res.data.results[0].title)
              setMovies(res.data.results)})
          .catch((err) => console.log(err));
      }, []);
      const redirectToDetails = (id) => {
        history.push(`/details/${id}`)
      }
    return (
        <div className="container">
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
