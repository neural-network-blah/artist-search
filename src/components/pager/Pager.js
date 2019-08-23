import React from 'react';
import PropTypes from 'prop-types';
// import Link from 'react-router-dom';

function Pager({ pageCount, currentPage, pageClicker }){

  const arr = [...Array(pageCount).keys()];

  const pages = arr.map(page => {
    if(page === currentPage){
      return(
        <div key={page} >
          <h2 style={{ 'fontStyle': 'italic' }} >{page}</h2>
        </div>
      );
    }
    return(
      <div key={page}>
        <h2>{page}</h2>
      </div>
    );

  });
  
  return(
    <section>
      <button name='Previous' onClick={pageClicker(-1)}>👈</button>
      {pages}
      <button name='Next' onClick={pageClicker(1)}>👉</button>
    </section>
  );
}

Pager.propTypes = {
  pageCount: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  pageClicker: PropTypes.func.isRequired
};

export default Pager;

{/* <Link to={`${location}${page}`}>
  <h2>{1}</h2>
  <ListItem name={item[name]} />
</Link> */}
