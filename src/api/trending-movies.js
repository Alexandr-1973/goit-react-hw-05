import axios from "axios";
import BASE from "./base";

async function trendingMoviesFetch() {
  const trendingApi = "/trending/movie/day";
  const url = `${BASE.BASE_URL}${trendingApi}`;
  const res = await axios.get(url, BASE.OPTIONS);
  return res;
}

export default trendingMoviesFetch;
