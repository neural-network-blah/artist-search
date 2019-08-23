import React, { Component } from 'react';
import SongTitle from '../components/SongTitle';
import Lyrics from '../components/lyrics/Lyrics';
import PropTypes from 'prop-types';
import musicApi from '../services/musicApi';

const title = 'Best Song Ever';


export default class LyricsView extends Component{
  state = {
    title: '',
    lyrics: ''
  }

  static propTypes = {
    match: PropTypes.object.isRequired
  }

  componentDidMount() {
    musicApi.getRecordingLyrics(this.props.match.params.).then(song => {
      this.setState({ lyrics: song });
    });
    console.log(this.state.lyrics);
  }
  
  render(){
    return(
      <>
        <h1>Lyrics View!!! Oh Yeah!!!</h1>
        <SongTitle title={title} />
        <Lyrics lyrics={this.state.lyrics} />
      </>
    );
  }
}
