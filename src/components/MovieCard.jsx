import "../styles/MovieCard.css"
import { useContextForMovies } from "../contexts/FavoriteContext";

function MovieCard({movie}){

    const {addFavorites, removeFavorites, checkFavorites} = useContextForMovies()
    const favorite = checkFavorites(movie.id)

    function onFavoriteClick(e){
        e.preventDefault()
        if (favorite) removeFavorites(movie.id)
        else addFavorites(movie)
    }
    return <div className="movie-card">
        <div className="movie-poster">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <div className="movie-overlay">
                <button className={`favorite-btn ${favorite ? "active" : ""}`} onClick={onFavoriteClick}>
                    ♥
                </button>
            </div>
        </div>
        <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>{movie.release_date}</p>
        </div>
        

    </div>

}

export default MovieCard