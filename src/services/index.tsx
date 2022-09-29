export const fetchApi = async () => {
  let result = fetch("https://newsapi.org/v2/top-headlines?country=tw&apiKey=dc01149c7c004404a03a135efd861e6e", { method: 'get' })
    .then(rs => rs.json() )
    .catch(err => console.error(err));

  return result;
}