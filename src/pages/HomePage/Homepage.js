import { useEffect, useState } from "react";
import MovieCard from "../../components/MovieCrad/MovieCard";
import MoviesList from "../../MovieList/MoviesList";
import "./Homepage.css";

export const Homepage = () => {
  const [popularmovies, setPopularMovies] = useState([]);
  const onFetchMovie = () => {
    fetch("https://ophim1.com/danh-sach/phim-moi-cap-nhat?page=${page}")
      .then((response) => response.json())
      .then((data) => {
        setPopularMovies(data.items);
      });
  };

  useEffect(() => {
    onFetchMovie();
  }, []);

  // const movieListElement = popularmovies.map((movie) => {
  //   return <MovieCard data={movie} key={movie.id} />;
  // });

  return (
    <div>
      <h1>Phim hay</h1>
      {/* <div className="movie-list"> {movieListElement}</div> */}
      <MoviesList />
    </div>
  );
};
export default Homepage;
