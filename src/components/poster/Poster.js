import React from 'react';
import PropTypes from 'prop-types';

function Poster({ url }) {
  return(
    <img src={url} />
  );
}

Poster.propTypes = {
  url: PropTypes.string
};

export default Poster;
