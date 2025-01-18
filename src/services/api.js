    const api_key = "9028a645494316c524470d5fc08b7cec"
    const base_url = "https://api.themoviedb.org/3"

    export const getMovies = async() => {
        const response = await fetch(`${base_url}/movie/popular?api_key=${api_key}`);
        const data = await response.json();
        return data.results;
    }

    export const getMovieSearch = async(query) => {
        const response = await fetch(`${base_url}/search/movie?api_key=${api_key}&query=${encodeURIComponent(query)}`);
        const data = await response.json();
        return data.results;
    }
