
import MoviesType from "../types/movieType";
import GenresType from "../types/genreType";

const Genres = ({ movie, genres }: { movie: MoviesType | undefined, genres: GenresType[] }) => {

  return (
    <div className="genres">
      <div>Genres:</div>
      {movie?.genre_ids.map((genreId, index) => {
        const genre = genres?.find((item: GenresType) => item.id === genreId);
        if (genre) {
          return (
            <span key={index} className="genre">
              {genre.name}
            </span>
          );
        }
        return null;
      })}
    </div>
  );
};

export default Genres;