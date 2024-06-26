import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const Movie = () => {
  const params = useParams();
  const [movie, setMovie] = useState({});
  const fetchMovie = () => {
    const apiURL = `https://ophim1.com/phim/${params.slug}`;
    fetch(apiURL)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.movie);
        setMovie(data.movie);
      });
  };
  useEffect(() => {
    fetchMovie();
  }, []);

  // const { server_data } = movie;
  return (
    <div>
      <div>
        <h2>Xem phim</h2>
      </div>
    </div>
  );
};

export default Movie;
