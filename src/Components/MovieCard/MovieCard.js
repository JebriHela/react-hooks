import React from 'react'
import { Link } from 'react-router-dom'
import Rate from '../Rate'
import './MovieCard.css'
const MovieCard = ({ movie }) => {
  return (
		 <Link to={`/movie/descption/${movie.name}`}>
    <div>
     <body>
	<div class="hero-container">
		<div class="main-container">
			<div class="poster-container">
				<a href="#"><img src={movie.image} class="poster" /></a>
			</div>
			<div class="ticket-container">
				<div class="ticket__content">
					<h4 class="ticket__movie-title">{movie.name}</h4>
					<p class="ticket__movie-slogan">
					{movie.description}
					</p>
					<p class="ticket__current-price"> 
					<Rate rating={movie.rating} />
					</p>
					<p class="ticket__old-price"> {movie.rating} </p>
					<button class="ticket__buy-btn">Buy now</button>
				</div>
			</div>
		</div>
	</div>
</body>
    </div>
	</Link>
  )
}

export default MovieCard
