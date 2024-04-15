import axios from "axios";
import BASE from "./base";

async function creditsMoviesFetch(id) {
  const creditsApi = "/movie/";
  const creditsId = `${id}`;
  const url = `${BASE.BASE_URL}${creditsApi}${creditsId}/credits`;
  const res = await axios.get(url, BASE.OPTIONS);
  return res;
}

export default creditsMoviesFetch;
