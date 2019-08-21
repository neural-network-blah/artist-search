import React, { Component } from 'react';
import SongTitle from '../components/SongTitle';

const title = 'Best Song Ever';
const lyrics = 'here are some song lyrics'


export default class LyricsView extends Component{
  
  render(){
    return(
      <>
        <h1>Lyrics View!!! Oh Yeah!!!</h1>
        <SongTitle title={title} lyrics={lyrics} />
      </>
    );
  }
}
