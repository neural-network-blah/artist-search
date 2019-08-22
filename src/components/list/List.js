import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '../listItem/ListItem';
import styles from './List.css';
import { Link } from 'react-router-dom';

function List({ array, keyName, name, location }){
  
  const listItems = array.map(item => {
    const id = item[keyName];

    return(
      <li key={item[keyName]} >
        <Link to={`${location}${id}`}>
          <ListItem name={item[name]} />
        </Link>
      </li>
    );
  });
    

  return(
    <ul className={styles.List}>
      {listItems}
    </ul>
  );
}

List.propTypes = {
  array: PropTypes.array.isRequired,
  keyName: PropTypes.string,
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired
};

export default List;
