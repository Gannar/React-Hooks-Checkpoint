import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Link to={`/movies/${movie.title}`} style={{ textDecoration: "none", color: "inherit" }}>
        <Card.Img variant="top" src={movie.posterURL} />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>⭐ {movie.rating}</Card.Text>
        </Card.Body>
      </Link>
    </Card>
  );
}

export default MovieCard;
