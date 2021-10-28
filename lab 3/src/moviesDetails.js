import React from 'react'
import {useParams } from 'react-router';
import axiosInstance from './axiosinstance'
import { useEffect, useState } from "react";
export default function MoviesDetails() {
    const [movies, setMovies] = useState([]);
    const params = useParams();
    const source="https://image.tmdb.org/t/p/w500"
    // {id : 12345}
    console.log(params);
   
    useEffect(() => {
        axiosInstance
          .get(`/movie/${params.id}?api_key=125f20745f4030a31d2a4c7ed086d694`)
          .then((res) => {
            console.log(res.data.title)
              setMovies(res.data)})
          .catch((err) => console.log(err));
      }, []);
    // const movie=movies.find(product => product.id === params.id)
    // console.log(movie)
    return (
        <div className="container">
            <div className='row m-2'>
               
            <div className="card mb-3">
  <div className="row g-0">
    <div className="col-md-4">
      <img src={`${source}/${movies.poster_path}`} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{movies.title}</h5>
        <p className="card-text">{movies.overview}</p>
        <p className="card-text"><small className="text-muted">{movies.vote_average}</small></p>
      </div>
    </div>
  </div>
</div>
        </div>
        </div>
    )
    
}
