import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ArtistView extends Component{
  static propTypes = {
    match: PropTypes.object.isRequired
  }

  render(){
    return(
      <>
        <h1>Artist View!!! YEeehawww!!!</h1>
        <h2>{this.props.match.params.id}</h2>
      </>
    );
  }
}
