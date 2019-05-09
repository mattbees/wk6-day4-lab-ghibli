import React from 'react';
import './Film.css';

const Film = (props) => {

  return (
    <div className='film'>
      <img src='Studio_Ghibli_logo.svg.png' alt='Studio Ghibli' />
      <h1>{props.title}</h1>
      <h2>Director: {props.director}</h2>
      <h3>Producer: {props.producer}</h3>
      <h4>Release date: {props.release_date}</h4>
      <h4>Rotten Tomatoes score: {props.rt_score}</h4>
      <p>{props.description}</p>
    </div>
  )

}

export default Film;
