import axios from "axios";
import BASE from "./base";

async function reviewsMoviesFetch(id) {
  const reviewsApi = "/movie/";
  const reviewsId = `${id}`;
  const url = `${BASE.BASE_URL}${reviewsApi}${reviewsId}/reviews`;
  const res = await axios.get(url, BASE.OPTIONS);
  return res;
}

export default reviewsMoviesFetch;
