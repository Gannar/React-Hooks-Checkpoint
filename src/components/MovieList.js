import React from 'react';
import { Row, Col } from 'react-bootstrap';
import MovieCard from './MovieCard';

function MovieList({ movies }) {
  return (
    <Row className="mt-4">
      {movies.map((movie, index) => (
        <Col key={index} md={4} className="mb-4">
          <MovieCard movie={movie} />
        </Col>
      ))}
    </Row>
  );
}

export default MovieList;
