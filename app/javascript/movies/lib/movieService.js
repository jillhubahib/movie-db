export const search = (baseUrl, text) => {
  const searchQuery = `${baseUrl}/movies/0/search?q=${text}`
  return fetch(searchQuery)
    .then(res => res.json())
}