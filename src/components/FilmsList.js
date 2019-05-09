import React from 'react';
import Film from './Film';
import './FilmsList.css';

const FilmsList = (props) => {
  const films = props.films.map((film, index) => {
    return (
      <Film
        key={film.id}
        title={film.title}
        description={film.description}
        director={film.director}
        producer={film.producer}
        release_date={film.release_date}
        rt_score={film.rt_score}
      />
    )
  })

  return (
    <div className='films-list'>
      {films}
    </div>
  )

}

export default FilmsList;
