import React from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function MovieDetail({ movies }) {
  const { title } = useParams();
  const movie = movies.find((m) => m.title === title);

  if (!movie) {
    return <h2>Movie not found</h2>;
  }

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <div style={{ margin: "20px 0" }}>
        <iframe
          width="560"
          height="315"
          src={movie.trailer}
          title={movie.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <Link to="/">
        <Button variant="secondary">⬅ Back to Home</Button>
      </Link>
    </div>
  );
}

export default MovieDetail;
