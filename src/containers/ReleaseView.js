import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Poster from '../components/poster/Poster';
import Title from '../components/title/Title';
import List from '../components/list/List';
import musicApi from '../services/musicApi';

const url = 'http://ia800706.us.archive.org/6/items/mbid-032c0dcf-32fb-48df-854c-c4ffdea82009/mbid-032c0dcf-32fb-48df-854c-c4ffdea82009-4732102938.jpg';

export default class ReleaseView extends Component{

  state = {
    albumSongs: [],
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
  }

  render(){
    return(
      <>
        <Title name="stuff" />
        <List array={ this.state.albumSongs } keyName='id' name='title' location='/lyrics/' />
        <Poster url={url} />
      </>
    );
  }
}
