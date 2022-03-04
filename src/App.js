import React, { useState } from "react"
import { Route, Routes } from "react-router-dom";
import './App.css';
import AddMovie from "./Components/AddMovie/AddMovie";
import Description from "./Components/Description";
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
      <Routes>
        <Route path="/" element={<div>

      <MovieList movies={movies.filter(el => el.name.toLocaleLowerCase().includes(searchTitle.toLocaleLowerCase().trim()) && el.rating >= searchRate)} />
      <AddMovie addNewMovie={addNewMovie} />
        </div>}/>
        <Route path="/movie/descption/:name" element={
          <Description movies={movies} />
        }/>
      </Routes>
    </div>
  );
}

export default App;
