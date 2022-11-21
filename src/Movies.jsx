import React from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from './context';

const noneImg =
  'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930';

function Movies() {
  const { movies, loading } = useGlobalContext();
  console.log(movies);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (movies) {
    return (
      <section className="movies-list">
        {movies.map(movie => {
          console.log(movie);
          const {
            Title: name,
            Poster: img,
            Year: reldate,
            imdbID: id,
            Type: type,
          } = movie;
          return (
            <Link to={`/movies/${id}`} key={id}>
              <article className="single-movie">
                <img src={img === 'N/A' ? noneImg : img} alt={name} />
                <div className="movie-info">
                  <h2 className="title">{name}</h2>
                  <h4 className="type">
                    Type - {type[0].toUpperCase() + type.slice(1)}
                  </h4>
                  <p>Release Date: {reldate}</p>
                </div>
              </article>
            </Link>
          );
        })}
      </section>
    );
  }
}

export default Movies;
