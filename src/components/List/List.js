import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '../listItem/ListItem';

function List({ array, keyName, name, clickHandler }){
  const listItems = array.map(item => (
    <li key={item[keyName]} onClick={clickHandler(item[keyName])} >
      <ListItem name={item[name]} />
    </li>
  ));

  return(
    <ul>
      {listItems}
    </ul>
  );
}

List.propTypes = {
  array: PropTypes.array.isRequired,
  keyName: PropTypes.string,
  clickHandler: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default List;
