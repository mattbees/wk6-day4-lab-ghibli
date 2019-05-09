import React, { Component } from 'react';

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
    this.getCategoryOptions = this.getCategoryOptions.bind(this);
    this.getFullOptions = this.getFullOptions.bind(this);
    this.mapFilteredOptions = this.mapFilteredOptions.bind(this);

  }

  handleCategoryChange(event) {
    this.setState({ category: event.target.value });
  };


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
    })
  }


  createCategories() {
    const options = [];
    this.props.categories.forEach((category, index) => {
      options.push(<option value={category} key={index}>{category}</option>)
    })
    return options;
  }

  render() {
    return(
      <>
      <select onChange={this.handleCategoryChange}>
        {this.createCategories()}
      </select>
      <select>
        {this.getCategoryOptions()}
      </select>
      </>
    )
  }
}


// <option>{this.props.categories[0]}</option>;
// <option>{this.props.categories[1]}</option>;
// <option>{this.props.categories[2]}</option>;
// <option>{this.props.categories[3]}</option>;
// <option>{this.props.categories[4]}</option>;


export default FilmForm;
