
import MovieCard from "../components/MovieCard";
import cart from "../assets/cart.png";
import useMovies from "../hooks/useMovies";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
	const {
		getMovies,
		getGenre,
		movies,
		genres,
		getSearchMovie,
		selected, setSelected,
	} = useMovies();
	const [search, setSearch] = useState<string>("");

	/**
	 * The function "handleSearchMovie" takes a keyword as input and sets it as the search term.
	 * @param {string} keyword - A string representing the keyword or search term for the movie search.
	 */
	function handleSearchMovie(keyword: string) {
		setSearch(keyword);
	}

	/**
	 * The function `searchMovieByKeyword` is a TypeScript React function that takes in an event and
	 * searches for a movie based on a keyword.
	 * @param event - The event parameter is a React.FormEvent object that represents the form submission
	 * event. It is passed to the searchMovieByKeyword function when the form is submitted.
	 */
	function searchMovieByKeyword(event: React.FormEvent) {
		event.preventDefault();
		console.log("keyword: ----->", search)
		getSearchMovie(search);
	}

	useEffect(() => {
		getMovies();
		getGenre();

	}, [])

	useEffect(() => {
		localStorage.setItem("movieList", JSON.stringify(movies))
		localStorage.setItem("genreList", JSON.stringify(genres)) 
	}, [movies])

	return (
		<div>
			<div className="cart">
				<Link to="/cart" >
					<img src={cart} alt="cart" />
				</Link>
				{selected.length > 0 ?
					<div className="number-items"><span>{selected.length}</span></div> :
					<div className="number-items bg-white"><span></span></div> 
				}
			</div>

			<h1>Movie List Section</h1>
			<form onSubmit={searchMovieByKeyword}>
				<div className="input-container">
					<label htmlFor="search-input">Search Movie</label>
					<input
						type="text"
						id="search-input"
						onChange={(e) => handleSearchMovie(e.target.value)}
						value={search}
					/>
				</div>
				<button type="submit" className="search-movie-button">Search</button>
			</form>

			<section className="movie-list-section">
				{/* Render Movie Lists Here */}
				<MovieCard
					movies={movies}
					genres={genres}
					selected={selected}
					setSelected={setSelected}
				/>
			</section>
		</div>
	)
}

export default HomePage;