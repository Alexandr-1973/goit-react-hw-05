import axios from "axios";
import BASE from "./base";

async function searchMoviesFetch(query) {
  const searchApi = "/search/movie";
  const querySearch = `?query=${query}`;
  const url = `${BASE.BASE_URL}${searchApi}${querySearch}`;
  const res = await axios.get(url, BASE.OPTIONS);
  return res;
}

export default searchMoviesFetch;
