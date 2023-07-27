// To generate the URL
const BASE_URL = 'https://api.tvmaze.com';

const apiGet = async queryString => {
  const response = await fetch(`${BASE_URL}${queryString}`);
  const body = await response.json();
  return body;
};

export const searchForShows = query => apiGet(`/search/shows?q=${query}`);
export const searchForActors = query => apiGet(`/search/people?q=${query}`);
export const getShowById = showId =>
  apiGet(`/shows/${showId}?embed[]=seasons&embed[]=cast`);
export const getShowByIds = async showIds => {
  const apiRequestPromises = showIds.map(showId => getShowById(showId));
  return await Promise.all(apiRequestPromises);
};
