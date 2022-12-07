import axios from 'axios';

const KEY = 'fa57e2b9fdf41bc9d58c99647d49def5';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

async function getMovies(endPoint, options) {
  try {
    const response = await axios.get(`${endPoint}?api_key=${KEY}&${options}`);

    return response;
  } catch (error) {
    console.error(error);
  }
}

export default getMovies;