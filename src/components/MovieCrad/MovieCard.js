import React from "react";
import "./MovieCard.css";
import { Link } from "react-router-dom";

const MovieCard = (props) => {
  const { data } = props;
  const { name, thumb_url, slug } = data;

  const imageURL = `https://img.ophim.live/uploads/movies/${thumb_url}`;
  return (
    <>
      <Link to={`/movies/${slug}`} className="movie-card">
        <div>
          <img src={imageURL} alt={name} />
          <h4>{name}</h4>
        </div>
      </Link>
    </>
  );
};

export default MovieCard;
