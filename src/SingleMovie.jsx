import React from 'react';
import { Link, useParams } from 'react-router-dom';
import useFetch from './useFetch';

const noneImg =
  'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930';

function SingleMovie() {
  const { id } = useParams();
  console.log(id);

  const { loading, movies, error } = useFetch(`i=${id}`);

  console.log(loading);
  console.log(error);
  console.log(movies);

  if (loading) {
    return <h2>Loading</h2>;
  }

  if (error.show) {
    return <h2>{error.msg}</h2>;
  }

  const {
    Title: name,
    Year: year,
    Actors: acts,
    Country: country,
    Poster: img,
    Writer: director,
  } = movies;

  return (
    <article className="single-movie">
      <div className="movie">
        <img src={img === 'N/A' ? noneImg : img} alt={name} /> <h2>{name}</h2>
        <h3>Actors: {acts}</h3>
        <h4>Country - {country}</h4>
        <p>Director - {director}</p>
      </div>
      <Link to="/">Back to home..</Link>
    </article>
  );
}

export default SingleMovie;
