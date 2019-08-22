import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '../listItem/ListItem';
import styles from './List.css';

function List({ array, keyName, name, clickHandler }){
  const listItems = array.map(item => (
    <li key={item[keyName]} onClick={clickHandler(item[keyName])} >
      <ListItem name={item[name]} />
    </li>
  ));

  return(
    <ul className={styles.List}>
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
