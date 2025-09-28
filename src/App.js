import React, { useState } from 'react';
import { Container, Navbar, Form, Button } from 'react-bootstrap';
import MovieList from './components/MovieList';
import Filter from './components/Filter';

function App() {
  const [movies, setMovies] = useState([
    {
      title: "Inception",
      description: "A thief enters people's dreams to steal secrets.",
      posterURL: "https://m.media-amazon.com/images/I/51w1phC2n4L._AC_SY679_.jpg",
      rating: 5,
    },
    {
      title: "Interstellar",
      description: "Explorers travel through a wormhole in space.",
      posterURL: "https://m.media-amazon.com/images/I/71n58A1NL0L._AC_SY679_.jpg",
      rating: 4,
    },
  ]);

  const [titleFilter, setTitleFilter] = useState("");
  const [rateFilter, setRateFilter] = useState(0);

  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: 1,
  });

  const handleAddMovie = () => {
    setMovies([...movies, newMovie]);
    setNewMovie({ title: "", description: "", posterURL: "", rating: 1 });
  };

  // Filtered movies
  const filteredMovies = movies.filter(
    (m) =>
      m.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
      m.rating >= rateFilter
  );

  return (
    <>
      {/* Navbar */}
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">🎬 My Movie App</Navbar.Brand>
        </Container>
      </Navbar>

      <Container className="mt-4">
        {/* Filter */}
        <Filter setTitleFilter={setTitleFilter} setRateFilter={setRateFilter} />

        {/* Add Movie Form */}
        <h3 className="mt-4">Add a New Movie</h3>
        <Form className="mb-4">
          <Form.Control
            type="text"
            placeholder="Title"
            className="mb-2"
            value={newMovie.title}
            onChange={(e) => setNewMovie({ ...newMovie, title: e.target.value })}
          />
          <Form.Control
            type="text"
            placeholder="Description"
            className="mb-2"
            value={newMovie.description}
            onChange={(e) =>
              setNewMovie({ ...newMovie, description: e.target.value })
            }
          />
          <Form.Control
            type="text"
            placeholder="Poster URL"
            className="mb-2"
            value={newMovie.posterURL}
            onChange={(e) =>
              setNewMovie({ ...newMovie, posterURL: e.target.value })
            }
          />
          <Form.Control
            type="number"
            min="1"
            max="5"
            className="mb-2"
            value={newMovie.rating}
            onChange={(e) =>
              setNewMovie({ ...newMovie, rating: Number(e.target.value) })
            }
          />
          <Button variant="primary" onClick={handleAddMovie}>
            Add Movie
          </Button>
        </Form>

        {/* Movie List */}
        <MovieList movies={filteredMovies} />
      </Container>
    </>
  );
}

export default App;
