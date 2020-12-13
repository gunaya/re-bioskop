import axios from 'axios';
const BASE_URL = "https://api.themoviedb.org/3";
const movie_api = axios.create({ baseURL: BASE_URL });


export default movie_api;