import React from 'react'
import MovieCard from './MovieCard/MovieCard'

const MovieList = ({ movies }) => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            flexWrap: 'wrap',
        }} >
            {movies.map((movie, i) => <MovieCard movie={movie} key={i} />)}
        </div>
    )
}

export default MovieList