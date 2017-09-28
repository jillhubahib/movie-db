export const search = (baseUrl, text) => {
  const searchQuery = `${baseUrl}/movies/0/search?q=${text}`;
  return fetch(searchQuery).then(res => res.json());
};

export const getMovieDetail = id => {
  return fetch(`${location.origin}/movies/${id}`).then(res => res.json());
};
