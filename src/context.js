import { createContext, useContext, useState } from 'react';
import useFetch from './useFetch';

const AppContext = createContext();

export const PRIVATE_API = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_NEW_API_KEY}&`;

const AppProvider = ({ children }) => {
  const [searchVal, setSearchVal] = useState('avengers');
  const { movies, loading, error } = useFetch(`s=${searchVal}`);

  // const fetchMovies = async urlFetch => {
  //   const response = await fetch(
  //     'https://www.omdbapi.com/?apikey=100c487e&s=blet'
  //   );
  //   const data = await response.json();
  //   console.log(data);
  // };
  // fetchMovies();
  // useFetch(() => {
  //   fetchMovies(`${PRIVATE_API}&${url}`);
  // }, [url]);

  return (
    <AppContext.Provider
      value={{ loading, movies, error, searchVal, setSearchVal }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
