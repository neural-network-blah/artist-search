import React from 'react';
import PropTypes from 'prop-types';
import image from '../../assets/poster_holder.jpg';


const defaultPic = image;
function Poster({ releaseId }) {
  return(
    <img src={`http://coverartarchive.org/release/${releaseId}/front`} />
  );
}

Poster.propTypes = {
  releaseId: PropTypes.string
};

export default Poster;
