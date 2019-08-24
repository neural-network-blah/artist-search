import React, { Component } from 'react';
import PropTypes from 'prop-types';
import List from '../components/list/List';
import musicApi from '../services/musicApi';
import Pager from '../components/pager/Pager';

export default class ArtistView extends Component{
  state = {
    releases: [],
    pageCount: 1,
    page: 1
  }

  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object,
    history: PropTypes.object
  }

  componentDidMount() {
    musicApi.getArtistReleases(this.props.match.params.artistId).then(releases => {
      this.setState({ releases: releases.releases });
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
    const { page, pageCount } = this.state;
    const artistId = this.props.match.params.artistId;

    return(
      <>
        <h1>Artist View!!! YEeehawww!!!</h1>
        <h2>{this.props.match.params.id}</h2>
        <Pager pageCount={pageCount} currentPage={page} pageClicker={this.pageClicker} />
        <List array={ this.state.releases } keyName='id' name='title' location={`/release/${artistId}/`} />
      </>
    );
  }
}

// /release/:artistId/:releaseId
