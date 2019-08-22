import React, { Component } from 'react';
// import musicApi from '../services/musicApi';
import SearchForm from '../components/search/SearchForm';

const paramsString = window.location.href;
const searchParams = new URLSearchParams(paramsString);

export default class Search extends Component{
  state = {
    search: '',
    submittedSearch: ''
  }
  
  // example how to get data
  componentDidMount(){
    // musicApi.findArtists('Prince').then(artists => {
    //   console.log(artists);
    // });
  }

  handleInputChange = ({ target }) => {
    this.setState({ search: target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    searchParams.set('search', this.state.search);
    console.log(paramsString);
    console.log(searchParams.toString());
    // this.setState(state => {
    //   return{ submittedSearch: state.search };
    // });
  }

  render(){
    const {
      search
    } = this.state;

    return(
      <>
        <h1>Search!!! Find  it!!</h1>
        <SearchForm search={search} handleInputChange={this.handleInputChange} handleSubmit={this.handleSubmit} />
        <p>hello</p>
      </>
    );
  }
}
