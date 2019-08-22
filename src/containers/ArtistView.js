import React, { Component } from 'react';
import PropTypes from 'prop-types';
import List from '../components/list/List';
import musicApi from '../services/musicApi';

export default class ArtistView extends Component{
  state = {
    recordings: [],
  }

  static propTypes = {
    match: PropTypes.object.isRequired
  }

  componentDidMount() {
    musicApi.getArtistReleases(this.props.match.params.id).then(artist => {
      this.setState({ recordings: artist });
      console.log(this.state.recordings);
    });
  }
    
  render(){
    return(
      <>
        <h1>Artist View!!! YEeehawww!!!</h1>
        <h2>{this.props.match.params.id}</h2>
        <List array={ this.state.recordings } keyName='id' name='title' location='/release/' />
      </>
    );
  }
}

// this.props.match.params.id
