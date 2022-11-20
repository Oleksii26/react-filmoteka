import axios from 'axios'

axios.defaults.baseURL = 'https://api.themoviedb.org/3'
const API_KEY = '6e9a81a407105e7aedf1637991fa6ef2'
export const IMAGE = 'https://image.tmdb.org/t/p/w500/'
export const NO_IMAGES = 'https://cdn.pixabay.com/photo/2021/02/06/09/03/man-5987447__340.jpg'
export const CAST_FEM = 'https://image.shutterstock.com/image-vector/woman-avatar-design-ai-8-260nw-2083328116.jpg'
export const CAST_MAN = 'https://image.shutterstock.com/image-vector/avatar-vector-male-profile-gray-260nw-538707355.jpg'

// Популярні фільми

export const popularFilms = async () => {
    const { data } = await axios.get(`/trending/all/day?api_key=${API_KEY}`)
    return data
}
//Пошук фільму по ід
export const searchFilmById = async (movieId) => {
    const { data } = await axios.get(`/movie/${movieId}?api_key=${API_KEY}`)
    return data 
}

//Пошук фільму по назві
export const searchFilmsByName = async (query) => {
    const { data } = await axios.get(`/search/movie?api_key=${API_KEY}&query=${query}`)
    return data
}

//Пошук акторів 
export const searchCast = async (id) => {
    const { data } = await axios.get(`/movie/${id}/credits?api_key=${API_KEY}`)
    return data 
}



