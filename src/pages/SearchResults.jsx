import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard"
import "../styles/Home.css"
import { getMovieSearch,getMovies } from "../services/api";



function SearchResults(){
    const [searchQuery,setSearchQuery]= useState("");

    const [movies,setMovies] = useState([]);
    const [error,setError] = useState(null);
    const [loading,setLoading] = useState(true);
    
    useEffect(()=> {
        const loadMovies = async () => {
            try{
                const famousMovies = await getMovies();
                setMovies(famousMovies)
            } catch (err){
                console.log(err);
                setError("No movies were loaded :(")
            }
            finally {
                setLoading(false);
            }
        };

        loadMovies();
    },[]);

    const handleSearch = async(e) => {
        e.preventDefault()
        if(!searchQuery.trim()) return  
        if(loading) return

        setLoading(true);
        try{
            const searchMovieResults = await getMovieSearch(searchQuery);
            setMovies(searchMovieResults);
            setError(null);

        }catch(err){
            console.log(err);
            setError("No movies to be found :(")
        }finally {
            setLoading(false)
        }
    };
    
return(
    <div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input type="text"
                    placeholder="movie-search"
                    className="search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)} />
            <button type="submit" className="search-button" >Search </button>
        </form>

        {error && <div className="error-message">{error}</div>}


        {loading? (<div className="loading">Loading....</div>)
        :(  <div className="movies-grid">
            {movies.map((movie) => (
                 (
                <MovieCard movie={movie} key={movie.id} />
                )
            ))}
        </div>)}
      
    </div>
);
}
export default SearchResults;

