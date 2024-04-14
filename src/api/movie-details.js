import axios from "axios";
import BASE from "./base";

async function detailsMoviesFetch(id) {
  const datailsApi = "/movie/";
  const detailsId = `${id}`;
  const url = `${BASE.BASE_URL}${datailsApi}${detailsId}`;
  const res = await axios.get(url, BASE.OPTIONS);
  return res;
}

export default detailsMoviesFetch;
