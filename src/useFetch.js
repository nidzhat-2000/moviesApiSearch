import React, { useEffect, useState } from 'react';

export const PRIVATE_API = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_NEW_API_KEY}&`;
console.log(PRIVATE_API);

function useFetch(url) {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState({ show: false, msg: '' });

  const fetchMovies = async urlFetch => {
    const response = await fetch(urlFetch);
    const data = await response.json();
    // console.log(data);
    try {
      if (data.Response === 'True') {
        console.log(data);
        setMovies(data.Search || data);
      } else {
        setError({ show: true, msg: data.Error });
      }
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies(`${PRIVATE_API}&${url}`);
  }, [url]);

  return { loading, error, movies };
}

export default useFetch;
