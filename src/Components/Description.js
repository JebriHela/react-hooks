import React from 'react'
import { useParams } from 'react-router-dom'
import './Description.css';

function Description({movies}) {
    const params = useParams()
    const film = movies.find(el => el.name === params.name)
    // console.log(params)
  return (
    <div>
       { console.log(params)}
        <h1>{film.name}</h1>
        <img src={film.image}/>
        
    </div>
  )
}

export default Description