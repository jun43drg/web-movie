import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCrad/MovieCard";
import "./MoviesList.css";

const MoviesList = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  const fetchMovies = (page) => {
    fetch(`https://ophim1.com/danh-sach/phim-moi-cap-nhat?page=${page}`)
      .then((response) => response.json())
      .then((data) => setMovies(data.items))
      .catch((error) => console.error("Error fetching movies: ", error));
  };

  useEffect(() => {
    fetchMovies(page);
  }, [page]);

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };

  return (
    <div className="movies-list-container">
      <div className="movies-list">
        {movies.map((items) => (
          <MovieCard key={items.id} data={items} />
        ))}
      </div>
      <div className="pagination">
        <button onClick={handlePreviousPage} disabled={page === 1}>
          Trang trước
        </button>
        <span>Trang {page}</span>
        <button onClick={handleNextPage}>Trang sau</button>
      </div>
    </div>
  );
};

export default MoviesList;
