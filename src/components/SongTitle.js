import React from 'react';
import PropTypes from 'prop-types';

function SongTitle({ title, lyrics }) {
  return(
    <>
      <h2>{title}</h2>
      <p>{lyrics}</p>
    </>  
  );
}

SongTitle.propTypes = {
  title: PropTypes.string,
  lyrics: PropTypes.string
};

export default SongTitle;
