import { useState, useEffect } from "react";
import axios from "axios";
import MoviesType from "../types/movieType";
import GenresType from "../types/genreType";

function useMovies() {
	const API_KEY = import.meta.env.VITE_API_KEY

	const [movies, setMovies] = useState<MoviesType[]>([]);
	const [genres, setGenres] = useState<GenresType[]>(() => JSON.parse(localStorage.getItem("genreList") || "[]"));
  const [selected, setSelected] = useState<MoviesType[]>([]);
	const [searchMovie, setSearchMovie] = useState<MoviesType>();
	const [isError, setIsError] = useState<boolean>(false);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	useEffect(() => {
    const storedSelected = JSON.parse(localStorage.getItem("selectedList") || "[]");
    setSelected(storedSelected);

    const storedMovies = JSON.parse(localStorage.getItem("movieList") || "[]");
    setMovies(storedMovies);
  }, [setSelected, setMovies]);

	/**
	 * The function `getMovies` makes an asynchronous API call to retrieve a list of movies based on a
	 * search query, and handles any errors that occur during the process.
	 */
	async function getMovies() {
		const url = `https://api.themoviedb.org/3/search/movie?query=a&api_key=${API_KEY}`

		try {
			setIsLoading(true);
			const results = await axios.get(url);
			setIsError(false);
			console.log(results.data.results);
			const moviesWithPrice = results.data.results.map((movie: MoviesType) => ({
				...movie
			}));
			
			setMovies(moviesWithPrice);
			setIsLoading(false);
		} catch (error) {
			console.error("Something went wrong on getMovies function: ", error)
			setIsError(true);
			setIsLoading(false);
		}
	}

	/**
	 * The function `getGenre` makes an API call to retrieve a list of movie genres and handles any errors
	 * that occur.
	 */
	async function getGenre() {
		const url = `https://api.themoviedb.org/3/genre/movie/list?language=&api_key=${API_KEY}`

		try {
			setIsLoading(true);
			const results = await axios.get(url);
			setIsError(false);
			console.log(results.data.genres);
			setGenres(results.data.genres)
			setIsLoading(false);
		} catch (error) {
			console.error("Something went wrong on getGenre function: ", error)
			setIsError(true);
			setIsLoading(false);
		}
	}

	async function getSearchMovie(search: string) {

		const result = movies.filter((obj) => JSON.stringify(obj.title).toLowerCase().includes(search.toString().toLowerCase()));

		console.log('Result: ', result);
		setMovies(result)
	}

	return {
		movies, setMovies,
		genres, setGenres,
		searchMovie, setSearchMovie,
		selected, setSelected,

		isError, setIsError,
		isLoading, setIsLoading,

		getMovies,
		getGenre,
		getSearchMovie,
	}
}

export default useMovies;