import React from 'react';
import { useParams } from 'react-router-dom';
import { API_ENDPOINT } from './context';
import useFetch from './useFetch';

function SingleMovie() {
  const { id } = useParams();
  console.log(id);

  const { loading, movies, error } = useFetch(`s=${id}`);

  console.log(movies);

  return <div>SingleMovie</div>;
}

export default SingleMovie;
