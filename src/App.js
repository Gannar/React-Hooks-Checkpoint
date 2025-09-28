import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container, Navbar } from "react-bootstrap";
import MovieList from "./components/MovieList";
import MovieDetail from "./components/MovieDetail";

function App() {
  const [movies] = useState([
    {
      title: "Inception",
      description: "A thief enters people's dreams to steal secrets.",
      posterURL:
        "https://m.media-amazon.com/images/I/51w1phC2n4L._AC_SY679_.jpg",
      rating: 5,
      trailer: "https://www.youtube.com/embed/YoHD9XEInc0",
    },
    {
      title: "Interstellar",
      description: "Explorers travel through a wormhole in space.",
      posterURL:
        "https://m.media-amazon.com/images/I/71n58A1NL0L._AC_SY679_.jpg",
      rating: 4,
      trailer: "https://www.youtube.com/embed/zSWdZVtXT7E",
    },
  ]);

  return (
    <Router>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">🎬 My Movie App</Navbar.Brand>
        </Container>
      </Navbar>

      <Container className="mt-4">
        <Routes>
          <Route path="/" element={<MovieList movies={movies} />} />
          <Route path="/movies/:title" element={<MovieDetail movies={movies} />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
