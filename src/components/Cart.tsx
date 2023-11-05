
import Genres from "./Genres";
import MoviesType from "../types/movieType";
import GenresType from "../types/genreType";

interface ChildType {
	genres: GenresType[]
	selected: MoviesType[]
	setSelected: (value: MoviesType[]) => void;
}

const Cart = ({ genres, selected, setSelected }: ChildType) => {

	function deleteSelectedMovie(movieId: number) {
		const updatedMovies = selected.filter(movie => movie.id !== movieId);
		setSelected(updatedMovies);
		localStorage.setItem("selectedList", JSON.stringify(updatedMovies));
	}

	return (
		<>
			{selected.map((movie: MoviesType, index: number) => {
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
							<div>Price: {movie.price || 0}</div>
						</div>
						<button className="delete-cart-button" onClick={() => deleteSelectedMovie(movie.id)}>Delete from Cart</button>
					</div>
				);
			})}
		</>
	)
}

export default Cart