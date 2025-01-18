import "../styles/Favorites.css"
import { useContextForMovies } from "../contexts/FavoriteContext";
import MovieCard from "../components/MovieCard";

function Favorites(){
    const {favorites} = useContextForMovies();

    if(favorites){
        return (
        <div className="favorites">
            <h2>Your favorites!</h2>
            <div className="movies-grid">
        {favorites.map((movie) => (
             (
            <MovieCard movie={movie} key={movie.id} />
            )
        ))}
        </div>
    </div>)
    }
    
    return (<div className="favorites-empty">
        <h2>No favorites yet</h2>
        <p>Add favorite movies with the heart icon to add them here</p>

    </div>)
}

export default Favorites;