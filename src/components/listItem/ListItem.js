import React from 'react';
import PropTypes from 'prop-types';

function ListItem({ name }){
  return(
    <h2>{name}</h2>
  );
}

ListItem.propTypes = {
  name: PropTypes.string.isRequired
};

export default ListItem;
