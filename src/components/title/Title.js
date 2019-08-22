import React from 'react';
import PropTypes from 'prop-types';

function Title({ name }) {
  return(
    <h2>{name}</h2>
  );
}

Title.propTypes = {
  name: PropTypes.string.isRequired
};

export default Title;
