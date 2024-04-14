import { VscArrowSmallLeft } from "react-icons/vsc";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const MovieDetailsPage = () => {
  const location = useLocation();

  return (
    <>
      <Link
        to={location.state.backPath ? location.state.backPath : "/movies"}
        state={location.state.queryText}
      >
        <VscArrowSmallLeft />
        Go back
      </Link>

      <div>
        <img src="" alt="" />
        <h2>Title</h2>
        <p>Score</p>
        <h3>Overview</h3>
        <p>Description</p>
        <h4>Genres</h4>
        <p>Drama</p>
      </div>
      <div>
        <p>Additional information</p>
        <a href="">Cast</a>
        <a href="">Reviews</a>
      </div>
    </>
  );
};

export default MovieDetailsPage;
