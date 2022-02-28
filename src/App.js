import React, { useState } from "react"
import './App.css';
import AddMovie from "./Components/AddMovie/AddMovie";
import Header from "./Components/Header/Header";
import MovieList from "./Components/MovieList";
import { MovieData } from "./MovieData"


function App() {
  const [movies, setMovies] = useState(MovieData)
  const [searchTitle, setSearchTitle] = useState("")
  const [searchRate, setSearchRate] = useState(0)

  const addNewMovie = (x) => {
    setMovies([...movies, x])
  }
 
  

  return (
    <div className="App">
     <Header setSearchTitle={setSearchTitle} setSearchRate={setSearchRate} searchRate={searchRate} />
      <MovieList movies={movies.filter(el => el.name.toLocaleLowerCase().includes(searchTitle.toLocaleLowerCase().trim()) && el.rating >= searchRate)} />
      <AddMovie addNewMovie={addNewMovie} />
    </div>
  );
}

export default App;
