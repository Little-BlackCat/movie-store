
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import Genres from './Genres';
import useMovies from '../hooks/useMovies';
import MoviesType from '../types/movieType';

const Detail = () => {
	const params = useParams();
	const currentMovieId = params.id
	const { movies, genres, setMovies } = useMovies();
	const [movie, setMovie] = useState<MoviesType>();
	const [open, setOpen] = useState<boolean>(false);
	const [editPrice, setEditPrice] = useState<number>(100);

	function findCurrentMovie(movieId: number) {
		const result = movies.find((movie) => movie?.id === movieId);
		console.log("current movie: ====> ", result)
		if (result) {
			setMovie({ ...result, price: 0 });
		}
	}

	function openForm() {
		setOpen(true)
	}

	function closeForm() {
		setOpen(false)
	}

	function handleEditPrice(event: React.ChangeEvent<HTMLInputElement>) {
		setEditPrice(Number(event.target.value));
	}

	function confirm(price: number) {
		if (movie) {
			const newMovie = {
				...movie,
				price: price,
			};
			setMovie(newMovie);
			const updatedMovies = movies.map((m) => (m.id === newMovie.id ? newMovie : m ));
			setMovies(updatedMovies);
			localStorage.setItem("movieList", JSON.stringify(updatedMovies));
			setOpen(false);
			console.log("movies: ====> ", movies) 
		}
	}

	useEffect(() => {
		findCurrentMovie(Number(currentMovieId))
	}, [currentMovieId, movies])

	return (
		<div className="movie-card detail">
			<div className="img img-detail">
				<img src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`} alt={movie?.title} />
			</div>

			<div className="details">
				<div className="detail-card">
					<div>Title: {movie?.title}</div>
					<div>Year: {movie?.release_date}</div>
					<div>Popularity: {movie?.popularity}</div>
					<Genres movie={movie} genres={genres} />
					<div>Vote Average: {movie?.vote_average}</div>
					<div>Vote Count: {movie?.vote_count}</div>
					<div>Price: {movie?.price || 0}</div>
				</div>


				<button className="price-button" onClick={() => openForm()}>Add Price</button>

				{open && (
					<div className="form-popup" id="myForm">
						<form className="form-container">
							<label htmlFor="price"><h2>Price</h2></label>
							<input
								type="number"
								name="price"
								value={editPrice}
								onChange={handleEditPrice}
							/>
							<div>
								<button type="button" className="cancel-button" onClick={() => closeForm()}>Close</button>
								<button type="button" className="cancel-button" onClick={() => confirm(editPrice)}>Confirm</button>
							</div>
						</form>
					</div>
				)}
			</div>
		</div>
	)
}

export default Detail