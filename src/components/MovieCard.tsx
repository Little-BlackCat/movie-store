import { useEffect } from "react"
import { useNavigate } from "react-router-dom";
import Genres from "./Genres";
import MoviesType from "../types/movieType";
import GenresType from "../types/genreType";

import check from "../assets/check.png"

interface ChildType {
  movies: MoviesType[]
  genres: GenresType[]
  selected: MoviesType[]
  setSelected: (value: MoviesType[]) => void
}

const MovieCard = ({ movies, genres, selected, setSelected }: ChildType) => {
  const navigate = useNavigate();

  /**
   * The function adds a movie ID to the selected movie list if it is not already included.
   * @param {number} movieId - The `movieId` parameter is a number that represents the ID of a movie.
   */
  function addMovies(items: MoviesType) {
    const exitedMovieId = selected.includes(items)
    if (!exitedMovieId) {
      const newSelected = [...selected]
      newSelected.push(items)
      setSelected(newSelected);
    }
  }

  useEffect(() => {
    localStorage.setItem("selectedList", JSON.stringify(selected));
		// localStorage.setItem("movieList", JSON.stringify(movies));
  }, [selected])

  return (
    <>
      {movies.map((movie: MoviesType, index: number) => {
        return (
          <div key={index} className="movie-card">
            <div className="img">
              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            </div>

            <div className="details">
              <div>Title: {movie.title}</div>
              <div>Year: {movie.release_date}</div>
              <div>Popularity: {movie.popularity}</div>
              <Genres movie={movie} genres={genres} />
              <div>Vote Average: {movie.vote_average}</div>
              <div>Vote Count: {movie.vote_count}</div>
              <div>Price: {movie.price}</div>
            </div>

            <button className="detail-button" onClick={() => navigate(`/details/${movie.id}`)}>Detail</button>
            {selected.includes(movies[index]) ?
              <button className="add-cart-button selected" onClick={() => { addMovies(movies[index]) }}>Add to Cart<img className="check" src={check} alt="check" /></button> :
              <button className="add-cart-button" onClick={() => { addMovies(movies[index]) }}>Add to Cart</button>
            }
          </div>
        );
      })}
    </>
  );
};

export default MovieCard;
