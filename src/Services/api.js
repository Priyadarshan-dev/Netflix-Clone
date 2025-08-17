const API_KEY = 'd8cb1f3ebfc312357a6a5e7a43f75c09'
const BASE_URL = "https://api.themoviedb.org/3"

export const getTrendingMovies = async () => {
    const response = await fetch(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`);
    const data = await response.json()
    return data.results
}

export const getNewReleases = async () => {
    const response = await fetch(`${BASE_URL}/movie/now_playing?api_key=${API_KEY}`);
    const data = await response.json()
    return data.results
}

export const getBlockBusterMovies = async () => {
    const response = await fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&sort_by=revenue.desc`)
    const data = await response.json()
    return data.results
}

export const getPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json()
    return data.results
}

export const getActionMovies = async () => {
    const response = await fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=28`);
    const data = await response.json()
    return data.results
}

export const getEpic = async () => {
    const response = await fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=12,36`);
    const data = await response.json()
    return data.results
}
