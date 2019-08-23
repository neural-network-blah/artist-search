import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Poster from '../components/poster/Poster';
import Title from '../components/title/Title';
import List from '../components/list/List';
import musicApi from '../services/musicApi';
import image from '../assets/poster_holder.jpg';

export default class ReleaseView extends Component{

  state = {
    albumSongs: [],
    poster: '',
  }

  static propTypes = {
    match: PropTypes.object.isRequired
  }

  componentDidMount() {
    musicApi.getReleaseRecordings(this.props.match.params.id).then(songs => {
      this.setState({ albumSongs: songs });
    });
    
    musicApi.getReleaseCover(this.props.match.params.id).then(coverImage => {
      this.setState({ poster: coverImage });
      if(this.state.poster === undefined) { Poster.url = { image };}
    });
  }

  render(){
    return(
      <>
        <Title name="Album with songs" />
        <List array={ this.state.albumSongs } keyName='id' name='title' location='/lyrics/' />
        <Poster releaseId={this.props.match.params.id} />
      </>
    );
  }
}
