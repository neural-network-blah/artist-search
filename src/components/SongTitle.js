import React from 'react';
import PropTypes from 'prop-types';

function SongTitle({ title }) {
  return(
    <>
      <h2>{title}</h2>
    </>  
  );
}

SongTitle.propTypes = {
  title: PropTypes.string,
  lyrics: PropTypes.string
};

export default SongTitle;
