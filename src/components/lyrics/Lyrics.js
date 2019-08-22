import React from 'react';
import PropTypes from 'prop-types';

function LyricsComponent({ lyrics }) {
  return(
    <pre>{lyrics}</pre>
  );
}

LyricsComponent.propTypes = {
  lyrics: PropTypes.string
};

export default LyricsComponent;
