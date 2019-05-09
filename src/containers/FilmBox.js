import React, { Component } from 'react';

class FilmBox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      films: []
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
      <h1>FilmBox</h1>
    )
  };

};

export default FilmBox;
