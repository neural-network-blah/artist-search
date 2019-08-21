import React, { Component } from 'react';
import musicApi from '../services/musicApi';

export default class Search extends Component{
  
  // example how to get data
  componentDidMount(){
    musicApi.findArtists('Prince').then(artists => {
      console.log(artists);
    });
  }

  render(){
    return(
      <>
        <h1>Search!!! Find  it!!</h1>
        <p>hello</p>
      </>
    );
  }
}
