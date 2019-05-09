import React, { Component } from 'react';
import FilmForm from '../components/FilmForm';
import FilmsList from '../components/FilmsList';

class FilmBox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      films: [],
      categories: ['title', 'director', 'producer', 'release_date', 'rt_score'],
      filterCriteria: null
    }
    this.updateFilterCriteria = this.updateFilterCriteria.bind(this);
    this.filterFilms = this.filterFilms.bind(this);
  };

  componentDidMount() {
    fetch('https://ghibliapi.herokuapp.com/films')
    .then(res => res.json())
    .then(data => {
      this.setState({ films: data })
    })
  }

  updateFilterCriteria(criteria) {
    this.setState({filterCriteria: criteria});
  }

  filterFilms() {
    if (this.state.filterCriteria === null) {
      return this.state.films;
    } else {
      const filteredList = this.state.films.filter((film) => {
        return film[this.state.filterCriteria.category]
          === this.state.filterCriteria.categoryOption;
      })
      console.log(filteredList);
      return filteredList;
    }
  }


  render() {
    return (
      <>
        <FilmForm
          categories={this.state.categories}
          films={this.state.films}
          updateFilterCriteria={this.updateFilterCriteria}
        />
        <FilmsList
          films={this.filterFilms()}
        />
      </>
    )
  };

};

export default FilmBox;
