import React, { Component } from 'react';
import musicApi from '../services/musicApi';
import SearchForm from '../components/search/SearchForm';
import List from '../components/List/List';

const paramsString = window.location.href;
const searchParams = new URLSearchParams(paramsString);

export default class Search extends Component{
  state = {
    search: '',
    arrResult: [],
    submittedSearch: ''
  }
  
  // example how to get data
  componentDidMount(){
    
  }

  handleInputChange = ({ target }) => {
    this.setState({ search: target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    searchParams.set('search', this.state.search);
    // console.log(paramsString);
    // console.log(searchParams.toString());

    musicApi.findArtists(this.state.search).then(artists => {
      console.log(artists);
      this.setState({ arrResult: artists });
    });

    // this.setState(state => {
    //   return{ submittedSearch: state.search };
    // });
  }

  render(){

    const {
      search, arrResult
    } = this.state;

    return(
      <>
        <h1>Search!!! Find  it!!</h1>
        <SearchForm search={search} handleInputChange={this.handleInputChange} handleSubmit={this.handleSubmit} />
        <List array={ arrResult } keyName='id' name='name' clickHandler={()=>{}} />
      </>
    );
  }
}
