import React, { Component } from 'react';
import FilmForm from '../components/FilmForm';


class FilmBox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      films: [],
      categories: ['title', 'director', 'producer', 'release_date', 'rt_score']
      // MORE STATE PROPERTIES
    }

    
  };

  componentDidMount() {
    fetch('https://ghibliapi.herokuapp.com/films')
    .then(res => res.json())
    .then(data => {
      this.setState({ films: data })
    })
  }




  render() {
    console.log(this.state.films);
    return (
      <>
      <h1>FilmBox</h1>
      <FilmForm
        categories={this.state.categories}
        films={this.state.films}
      />
      </>
    )
  };

};

export default FilmBox;
