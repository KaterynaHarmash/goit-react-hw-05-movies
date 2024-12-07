import axios from 'axios';

const apiKey =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyOTZmYTQ3NjkzMTYwODJkMjVmODYzYWQyODg1NzZhMCIsIm5iZiI6MTcxOTU2MzA1NS4wNjM5ODcsInN1YiI6IjY2N2U3MjAyZTdjNjY2NGJhMjMzZmNmZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mWk7w7eEwF0fFL9G6W4JBLZ2qDOkBgwrDQq7ubdVidg';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const headers = {
  Accept: 'application/json',
  Authorization: apiKey,
};

export const getTrend = async () => {
  const responce = axios.get('/trending/movie/day?language=en-US', {
    headers: headers,
  });
  return responce;
};

export const getMovie = async id => {
  const responce = axios.get(
    `/movie/${id}?language=en-US&append_to_response=images`,
    {
      headers: headers,
    }
  );
  return responce;
};
export const getCast = async id => {
  const responce = axios.get(`/movie/${id}/credits`, {
    headers: headers,
  });
  return responce;
};
export const getReviews = async id => {
  const responce = axios.get(`/movie/${id}/reviews`, {
    headers: headers,
  });
  return responce;
};
export const searchMovies = async (query, page) => {
  console.log(query, page);
  const responce = axios.get(`/search/movie?query=${query}&page=${page}`, {
    headers: headers,
  });
  return responce;
};
