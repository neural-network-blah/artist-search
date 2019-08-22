import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Poster from '../components/poster/Poster';
import Title from '../components/title/Title';
import List from '../components/list/List';
import musicApi from '../services/musicApi';

// const url = 'http://ia800706.us.archive.org/6/items/mbid-032c0dcf-32fb-48df-854c-c4ffdea82009/mbid-032c0dcf-32fb-48df-854c-c4ffdea82009-4732102938.jpg';

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
      console.log(this.props.match.params.id);
      this.setState({ albumSongs: songs });
      console.log(this.state.songs);
    });
    
    musicApi.getReleaseCover(this.props.match.params.id).then(coverImage => {
      this.setState({ poster: coverImage });
      
    });
    console.log(this.state.poster, 'poster console log');
  }

  render(){
    return(
      <>
        <Title name="Album with songs" />
        <List array={ this.state.albumSongs } keyName='id' name='title' location='/lyrics/' />
        <Poster url={ this.state.poster } />
      </>
    );
  }
}
