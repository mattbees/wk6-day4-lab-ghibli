import React, { Component } from 'react';
import './FilmForm.css';

class FilmForm extends Component {

  constructor(props){
    super(props);
    this.state = {
      category: '',
      categoryOption: ''
      // categoryOptions: ''
    }
    // this.createCategories = this.createCategories.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.getCategoryOptions = this.getCategoryOptions.bind(this);
    this.getFullOptions = this.getFullOptions.bind(this);
    this.mapFilteredOptions = this.mapFilteredOptions.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleCategoryChange(event) {
    this.setState({ category: event.target.value });
  };

  handleOptionChange(event) {
    this.setState({ categoryOption: event.target.value });
  }

  getCategoryOptions() {
    const fullOptions = this.getFullOptions(this.state.category);
    const filtered = this.filterOptions(fullOptions)
    const mapped = this.mapFilteredOptions(filtered)
    return mapped;
  }
  getFullOptions(category) {
    return this.props.films.map((film) => {
      return film[category];
    });
  };
  filterOptions(options) {
    return options.filter((option, index) => {
      return options.indexOf(option) === index;
    });
  };
  mapFilteredOptions(filteredOptions){
    return filteredOptions.map((option, index) => {
      return <option value={option} key={index}>{option}</option>
    });
  };


  createCategories() {
    const options = [];
    this.props.categories.forEach((category, index) => {
      options.push(<option value={category} key={index}>{category}</option>)
    })
    return options;
  }

  handleSubmit(event) {
    event.preventDefault();
    const category = this.state.category;
    const categoryOption = this.state.categoryOption;
    const filterCriteria = { category, categoryOption };
    console.log(filterCriteria);
    this.props.updateFilterCriteria(filterCriteria);
  };


  render() {
    return(
      <>
        <div className='film-form-div'>
          <form className='film-form' onSubmit={this.handleSubmit}>
            <select className='ui selection dropdown' onChange={this.handleCategoryChange}>
              {this.createCategories()}
            </select>
            <select className='ui selection dropdown' onChange={this.handleOptionChange}>
              {this.getCategoryOptions()}
            </select>
            <input type='submit' className='ui button' value='View films' />
          </form>
          <h1 className='film-form-heading'>Studio Ghibli</h1>
        </div>
      </>
    )
  }
}


export default FilmForm;
