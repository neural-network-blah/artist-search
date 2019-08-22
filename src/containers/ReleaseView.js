import React, { Component } from 'react';
import Poster from '../components/poster/Poster';
import Title from '../components/title/Title';

const url = 'http://ia800706.us.archive.org/6/items/mbid-032c0dcf-32fb-48df-854c-c4ffdea82009/mbid-032c0dcf-32fb-48df-854c-c4ffdea82009-4732102938.jpg';

export default class ReleaseView extends Component{
  render(){
    return(
      <>
        <Title name="stuff" />
        <Poster url={url} />
      </>
    );
  }
}
