import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./MovieDetail.css";

const MovieDetail = () => {
  const params = useParams();
  const [movieDetail, setMovieDetail] = useState({});
  const [episodes, setEpisodes] = useState([]);
  const [currentEpisode, setCurrentEpisode] = useState(null);

  const fetchMovieDetail = () => {
    const apiURL = `https://ophim1.com/phim/${params.id}`;
    fetch(apiURL)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMovieDetail(data.movie);
        setEpisodes(data.episodes[0]?.server_data || []);
        if (
          data.episodes &&
          data.episodes.length > 0 &&
          data.episodes[0]?.server_data.length > 0
        ) {
          setCurrentEpisode(data.episodes[0].server_data[0]);
        }
      })
      .catch((error) => console.error("Error fetching data: ", error));
  };

  useEffect(() => {
    fetchMovieDetail();
  }, [params.id]);

  const { name, content, poster_url } = movieDetail;

  return (
    <div className="movie-detail">
      <h1>Tên: {name}</h1>
      <img src={poster_url} alt={name} />
      <div dangerouslySetInnerHTML={{ __html: content }}></div>

      <div className="episode-list">
        <h2>Danh sách tập phim</h2>
        <div className="episode-buttons">
          {episodes.map((episode, index) => (
            <button
              key={index}
              onClick={() => setCurrentEpisode(episode)}
              className={currentEpisode === episode ? "active" : ""}
            >
              Tập {episode.name}
            </button>
          ))}
        </div>
      </div>

      {currentEpisode && (
        <div>
          <h2>Xem phim</h2>
          <iframe
            src={currentEpisode.link_embed}
            width="100%"
            height="500px"
            // frameBorder="0"
            allowFullScreen
            title="Video Embed"
          ></iframe>
        </div>
      )}

      <Link to="/" className="back-link">
        Quay lại
      </Link>
    </div>
  );
};

export default MovieDetail;
