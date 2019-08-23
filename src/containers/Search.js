import React, { Component } from 'react';
import PropTypes from 'prop-types';
import musicApi from '../services/musicApi';
import SearchForm from '../components/search/SearchForm';
import List from '../components/List/List';
import Pager from '../components/pager/Pager';

export default class Search extends Component{
  static propTypes = {
    location: PropTypes.object,
    history: PropTypes.object
  }

  state = {
    search: '',
    page: 1,
    pageCount: 1,
    arrResult: [],
    searchParams: {}
  }
  
  componentDidMount(){
    this.searchParams = new URLSearchParams(this.props.location.search);
    this.setState({
      search: this.searchParams.get('search')
    }, () => {
      if(this.state.search){
        musicApi.findArtists(this.state.search, this.state.page).then(artists => {
          this.setState({ arrResult: artists.artists, pageCount: Math.ceil(artists.count / 25) });
        });
      }
    });
  }

  handleInputChange = ({ target }) => {
    this.setState({ search: target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.searchParams.set('search', this.state.search);
    this.searchParams.set('page', this.state.page);
    this.props.history.push(`/?search=${this.state.search}&page=${this.state.page}`);
    console.log(this.state.page);

    musicApi.findArtists(this.state.search, this.state.page).then(artists => {
      this.setState({ arrResult: artists.artists, pageCount: Math.ceil(artists.count / 25), page: 1 });
    });
  }

  pageClicker = (pager) => {
    musicApi.findArtists(this.state.search, this.state.page + pager).then(artists => {
      this.setState({ arrResult: artists.artists });
    });
    this.setState(state => {
      return{ page: state.page + pager };
    });
  }

  render(){
    const {
      search, arrResult, page, pageCount
    } = this.state;

    return(
      <>
        <h1>Search!!! Find  it!!</h1>
        <SearchForm search={search} handleInputChange={this.handleInputChange} handleSubmit={this.handleSubmit} />
        <List array={ arrResult } keyName='id' name='name' location='/artist/' />
        <Pager pageCount={pageCount} currentPage={page} pageClicker={this.pageClicker} />
      </>
    );
  }
}

// pageCount, currentPage, clickHandler
