import { createContext,  useState, useContext, useEffect } from "react";

const contextForMovies = createContext();

export const useContextForMovies = () => useContext(contextForMovies);

export const MovieProvider = ({children}) => {

    const [favorites, pickFavorites] = useState([])

    useEffect(() => {
        const localFavorites = localStorage.getItem("favorites")

        if(localFavorites) pickFavorites(JSON.parse(localFavorites));
    }, [])

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites))
    },[favorites])

    //3 functions for handling favorite movies: addFavorites, removeFavorites and checkFavorites

    const addFavorites = (movie) => {
        pickFavorites(prev => [...prev, movie])
    }

    const removeFavorites = (movieId) => {
        pickFavorites(prev => prev.filter(movie => movie.id !== movieId))
    }

    const checkFavorites = (movieId) => {
        return favorites.some(movie => movie.id === movieId)
    }

    const value =  {
        favorites, addFavorites, removeFavorites, checkFavorites
    }

    return <contextForMovies.Provider value={value}>
        {children}
    </contextForMovies.Provider>
} 