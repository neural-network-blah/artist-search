import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '../listItem/ListItem';
import styles from './List.css';
import { Link } from 'react-router-dom';

function List({ array, keyName, name, clickHandler, location }){
  console.log(name, '### NAME ###');
  const listItems = array.map(item => (
    <li key={item[keyName]} onClick={clickHandler(item[keyName])} >
      <Link to={location[item[keyName]]}>
        <ListItem name={item[name]} />
      </Link>
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
  location: PropTypes.string.isRequired
};

export default List;
